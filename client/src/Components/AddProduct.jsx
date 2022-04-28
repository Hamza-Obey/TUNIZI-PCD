import React, { useState } from "react";
import axios from "axios"
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Modal,
    Input,
    Label
} from "reactstrap";



function AddProduct( props ) {



    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [file,setFile]=useState()
   
 
    const addpro = () => {
        let data = new FormData()
        data.append("file", file)
        data.append("name",name)
        data.append("desc",desc)
        axios.post("http://localhost:5000/produit/add",
        
        data,

        
        )
          .then((result) => {
            props.setModal(false)
            console.log(result)
            

          })
          .catch((err) => {
            console.error("error:${error}");
            

    
          });
          
      }
    return (
        
        <Modal 
            className="modal-dialog-centered"
            isOpen={props.isOpen}
            toggle={() => {
                props.setModal(!props.isOpen)}}
            >
                    
                        <Card style={{ backgroundColor: "#D3D3D3	",width:"500px" }} className="shadow border-0">
                            <CardHeader className="bg-transparent pb-1">
                                <h3 style={{ marginLeft: "100px", marginTop: "20px", marginBottom: "20px", marginLeft: "135px", color: "black" }}> ADD A  NEW PRODUCT </h3>
                            </CardHeader>
                            <CardBody className="px-lg-5 py-lg-5">

                                <Form role="form" encType="multipart/form-data">
                                    <FormGroup style={{ marginTop: "-45px " }}>
                                        <Label > PRODUCT NAME </Label>
                                        <Input
                                            type="text"
                                            value={name}
                                            placeholder="Product Name*"
                                            onChange={(event) => setName(event.target.value)}
                                        />


                                    </FormGroup>
                                    <FormGroup>
                                        <Label> DESCRIPTION </Label>
                                        <Input style={{ height: "200px", width: "400px" }}
                                            type="textarea"
                                            placeholder=" description* "
                                            value={desc}
                                            onChange={(event) => setDesc(event.target.value)}
                                        />

                                    </FormGroup>

                                    <FormGroup>
                                        <Label> File feedbacks for Sentiment Analysis </Label>
                                        <Input
                                            
                                            type="file"
                                            placeholder=" File*"
                                            
                                            onChange={(event) => setFile(event.target.files[0])}
                                            
                                        />

                                    </FormGroup>

                                    <div style={{ marginTop: "10px" }} className="text-center">
                                        <Button

                                            className="my-4"
                                            color="primary"
                                            type="button"
                                            style={{ backgroundColor: "#373b2b", height: "auto", borderRadius: "25px ", width: "120px", height: "40px", fontSize: "15px" }}
                                            onClick={()=> addpro()}
                                        >
                                            ADD
                                        </Button>
                                    </div>



                                </Form>
                            </CardBody>
                        </Card>
                    
            </Modal >


    )
            }

export default AddProduct
