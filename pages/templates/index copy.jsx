import React, { useState } from 'react';
import { Button, Card, CardBody, CardGroup, CardImg, CardSubtitle, CardTitle, CardText, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const Index = () => {
    const [modal, setModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        refersBy: '',
        amount: '',
        type: 'cr',
        notes: ''
    });

    const toggle = () => setModal(!modal);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Handle form submission here
        toggle();
        // Reset form
        setFormData({
            name: '',
            refersBy: '',
            amount: '',
            type: 'cr',
            notes: ''
        });
    };

    return (
        <>
            <div>
                <CardGroup>
                    <Card>
                        <CardImg
                            alt="Card image cap"
                            src="https://picsum.photos/318/180"
                            top
                            height="20%"
                            width="20%"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Card title
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Card subtitle
                            </CardSubtitle>
                            <CardText>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </CardText>
                            <Button color="primary" onClick={toggle}>
                                Button
                            </Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg
                            alt="Card image cap"
                            src="https://picsum.photos/318/180"
                            top
                            height="20%"
                            width="20%"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Card title
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Card subtitle
                            </CardSubtitle>
                            <CardText>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </CardText>
                            <Button color="primary" onClick={toggle}>
                                Button
                            </Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg
                            alt="Card image cap"
                            src="https://picsum.photos/318/180"
                            top
                            height="20%"
                            width="20%"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Card title
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Card subtitle
                            </CardSubtitle>
                            <CardText>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </CardText>
                            <Button color="primary" onClick={toggle}>
                                Button
                            </Button>
                        </CardBody>
                    </Card>
                </CardGroup>

                <Modal isOpen={modal} toggle={toggle} style={{ marginTop: '70px' }} size="lg">
                    <ModalHeader toggle={toggle} style={{ 
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        borderBottom: 'none'
                    }}>
                        <h4 style={{ margin: 0, fontWeight: '600' }}>Add Transaction Details</h4>
                    </ModalHeader>
                    <ModalBody style={{ padding: '30px', background: '#f8f9fa' }}>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup style={{ marginBottom: '20px' }}>
                                <Label for="name" style={{ 
                                    fontWeight: '600', 
                                    color: '#495057',
                                    marginBottom: '8px',
                                    fontSize: '14px'
                                }}>
                                    Name <span style={{ color: '#dc3545' }}>*</span>
                                </Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter full name"
                                    required
                                    style={{
                                        padding: '12px 15px',
                                        borderRadius: '8px',
                                        border: '2px solid #e0e0e0',
                                        fontSize: '14px',
                                        transition: 'all 0.3s'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                                />
                            </FormGroup>
                            <FormGroup style={{ marginBottom: '20px' }}>
                                <Label for="refersBy" style={{ 
                                    fontWeight: '600', 
                                    color: '#495057',
                                    marginBottom: '8px',
                                    fontSize: '14px'
                                }}>
                                    Referred By <span style={{ color: '#dc3545' }}>*</span>
                                </Label>
                                <Input
                                    type="text"
                                    name="refersBy"
                                    id="refersBy"
                                    value={formData.refersBy}
                                    onChange={handleInputChange}
                                    placeholder="Enter reference name"
                                    required
                                    style={{
                                        padding: '12px 15px',
                                        borderRadius: '8px',
                                        border: '2px solid #e0e0e0',
                                        fontSize: '14px',
                                        transition: 'all 0.3s'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                                />
                            </FormGroup>
                            <FormGroup style={{ marginBottom: '20px' }}>
                                <Label for="amount" style={{ 
                                    fontWeight: '600', 
                                    color: '#495057',
                                    marginBottom: '8px',
                                    fontSize: '14px'
                                }}>
                                    Amount <span style={{ color: '#dc3545' }}>*</span>
                                </Label>
                                <Input
                                    type="number"
                                    name="amount"
                                    id="amount"
                                    value={formData.amount}
                                    onChange={handleInputChange}
                                    placeholder="Enter amount"
                                    required
                                    style={{
                                        padding: '12px 15px',
                                        borderRadius: '8px',
                                        border: '2px solid #e0e0e0',
                                        fontSize: '14px',
                                        transition: 'all 0.3s'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                                />
                            </FormGroup>
                            <FormGroup tag="fieldset" style={{ 
                                marginBottom: '20px',
                                padding: '20px',
                                background: 'white',
                                borderRadius: '8px',
                                border: '2px solid #e0e0e0'
                            }}>
                                <Label style={{ 
                                    fontWeight: '600', 
                                    color: '#495057',
                                    marginBottom: '12px',
                                    fontSize: '14px'
                                }}>
                                    Transaction Type <span style={{ color: '#dc3545' }}>*</span>
                                </Label>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <FormGroup check style={{ flex: 1 }}>
                                        <Label check style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '12px 16px',
                                            borderRadius: '8px',
                                            border: formData.type === 'cr' ? '2px solid #28a745' : '2px solid #e0e0e0',
                                            background: formData.type === 'cr' ? '#d4edda' : 'white',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s',
                                            fontSize: '14px',
                                            fontWeight: '500'
                                        }}>
                                            <Input
                                                type="radio"
                                                name="type"
                                                value="cr"
                                                checked={formData.type === 'cr'}
                                                onChange={handleInputChange}
                                                style={{ marginRight: '10px' }}
                                            />
                                            <span style={{ color: formData.type === 'cr' ? '#155724' : '#495057' }}>
                                                💰 CR (Credit)
                                            </span>
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check style={{ flex: 1 }}>
                                        <Label check style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            padding: '12px 16px',
                                            borderRadius: '8px',
                                            border: formData.type === 'dr' ? '2px solid #dc3545' : '2px solid #e0e0e0',
                                            background: formData.type === 'dr' ? '#f8d7da' : 'white',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s',
                                            fontSize: '14px',
                                            fontWeight: '500'
                                        }}>
                                            <Input
                                                type="radio"
                                                name="type"
                                                value="dr"
                                                checked={formData.type === 'dr'}
                                                onChange={handleInputChange}
                                                style={{ marginRight: '10px' }}
                                            />
                                            <span style={{ color: formData.type === 'dr' ? '#721c24' : '#495057' }}>
                                                💳 DR (Debit)
                                            </span>
                                        </Label>
                                    </FormGroup>
                                </div>
                            </FormGroup>
                            <FormGroup style={{ marginBottom: '0' }}>
                                <Label for="notes" style={{ 
                                    fontWeight: '600', 
                                    color: '#495057',
                                    marginBottom: '8px',
                                    fontSize: '14px'
                                }}>
                                    Notes
                                </Label>
                                <Input
                                    type="textarea"
                                    name="notes"
                                    id="notes"
                                    value={formData.notes}
                                    onChange={handleInputChange}
                                    placeholder="Add any additional notes here..."
                                    rows="4"
                                    style={{
                                        padding: '12px 15px',
                                        borderRadius: '8px',
                                        border: '2px solid #e0e0e0',
                                        fontSize: '14px',
                                        transition: 'all 0.3s',
                                        resize: 'vertical'
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = '#667eea'}
                                    onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                                />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter style={{ 
                        background: 'white',
                        borderTop: '2px solid #e0e0e0',
                        padding: '20px 30px',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '12px'
                    }}>
                        <Button 
                            color="secondary" 
                            onClick={toggle}
                            style={{
                                padding: '10px 24px',
                                borderRadius: '8px',
                                fontWeight: '600',
                                fontSize: '14px',
                                border: 'none',
                                background: '#6c757d',
                                transition: 'all 0.3s'
                            }}
                            onMouseOver={(e) => e.target.style.background = '#5a6268'}
                            onMouseOut={(e) => e.target.style.background = '#6c757d'}
                        >
                            Cancel
                        </Button>
                        <Button 
                            color="primary" 
                            onClick={handleSubmit}
                            style={{
                                padding: '10px 32px',
                                borderRadius: '8px',
                                fontWeight: '600',
                                fontSize: '14px',
                                border: 'none',
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                transition: 'all 0.3s',
                                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
                            }}
                        >
                            Submit Transaction
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </>
    );
};

export default Index;