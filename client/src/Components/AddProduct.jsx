import React, { useState } from "react";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Label
} from "reactstrap";



function AddProduct({closeModal}) {
    


    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [file, setFile] = useState()
    return (
        <>

            <div style={{ width: "750px", height: "auto", marginTop: "50px", marginLeft: "600px" }} className="modal-body p-0 row align-self-center" >
                <Card style={{ backgroundColor: "#dfd5e4", borderRadius: "20px" }} className="shadow border-0">
                    <CardHeader className="bg-transparent pb-1">
                        <h3 style={{ marginLeft: "100px", marginTop: "20px", marginBottom: "20px", marginLeft: "135px", color: "black" }}> ADD A  NEW PRODUCT </h3>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">

                        <Form role="form">
                            <FormGroup style={{ marginTop: "-45px " }}>
                                <Label > PRODUCT NAME </Label>
                                <Input
                                    type="text"
                                    placeholder="Product Name*"
                                />


                            </FormGroup>
                            <FormGroup>
                                <Label> DESCRIPTION </Label>
                                <Input style={{ height: "200px", width: "400px" }}
                                    type="textarea"
                                    placeholder=" description* "
                                />

                            </FormGroup>

                            <FormGroup>
                                <Label> File feedbacks for Sentiment Analysis </Label>
                                <Input
                                    type="file"
                                    placeholder=" File*"
                                />

                            </FormGroup>

                            <div style={{ marginTop: "10px" }} className="text-center">
                                <Button

                                    className="my-4"
                                    color="primary"
                                    type="button"
                                    style={{ backgroundColor: "#373b2b", height: "auto", borderRadius: "25px ", width: "120px", height: "40px", fontSize: "15px" }}
                                    onClick={()=>closeModal(false)}
                                >
                                    ADD
                                </Button>
                            </div>



                        </Form>
                    </CardBody>
                </Card>
            </div>
        </>


    )
}

export default AddProduct
