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
            <div style={{ 
                padding: '40px 20px', 
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                minHeight: '100vh'
            }}>

                <div className='container-fulid' fluid style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                    <div style={{ 
                        marginBottom: '30px'
                    }}>
                        <h2 style={{ 
                            fontSize: '32px', 
                            fontWeight: '700', 
                            color: '#2d3748',
                            marginBottom: '10px',
                            textAlign: 'center'
                        }}>
                            Financial Services
                        </h2>
                        <p style={{
                            textAlign: 'center',
                            color: '#718096',
                            fontSize: '16px'
                        }}>
                            Choose a service to manage your transactions
                        </p>
                    </div>
                    
                    <CardGroup style={{ 
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '30px',
                        gridAutoRows: '1fr'
                    }}>
                        <Card style={{
                            border: 'none',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            background: 'white',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                        }}>
                            <div style={{ 
                                position: 'relative', 
                                overflow: 'hidden',
                                height: '200px'
                            }}>
                                <CardImg
                                    alt="Savings Account"
                                    src="https://picsum.photos/400/250?random=1"
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '15px',
                                    right: '15px',
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    color: 'white',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                                }}>
                                    PREMIUM
                                </div>
                            </div>
                            <CardBody style={{ 
                                padding: '25px',
                                display: 'flex',
                                flexDirection: 'column',
                                flex: 1
                            }}>
                                <CardTitle tag="h5" style={{
                                    fontSize: '22px',
                                    fontWeight: '700',
                                    color: '#2d3748',
                                    marginBottom: '8px'
                                }}>
                                    Savings Account
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-3"
                                    tag="h6"
                                    style={{
                                        color: '#667eea',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        marginBottom: '15px'
                                    }}
                                >
                                    High Interest Returns
                                </CardSubtitle>
                                <CardText style={{
                                    color: '#718096',
                                    fontSize: '14px',
                                    lineHeight: '1.6',
                                    marginBottom: '20px',
                                    flex: 1
                                }}>
                                    Secure your future with our high-yield savings account. Enjoy competitive interest rates and flexible withdrawal options.
                                </CardText>
                                <Button 
                                    onClick={toggle}
                                    style={{
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        border: 'none',
                                        borderRadius: '10px',
                                        padding: '12px 24px',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        transition: 'all 0.3s',
                                        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                                        width: '100%'
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.transform = 'scale(1.05)';
                                        e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.5)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.transform = 'scale(1)';
                                        e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                                    }}
                                >
                                    Add Transaction
                                </Button>
                            </CardBody>
                        </Card>
                        
                        <Card style={{
                            border: 'none',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            background: 'white',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                        }}>
                            <div style={{ 
                                position: 'relative', 
                                overflow: 'hidden',
                                height: '200px'
                            }}>
                                <CardImg
                                    alt="Investment Portfolio"
                                    src="https://picsum.photos/400/250?random=2"
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '15px',
                                    right: '15px',
                                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                                    color: 'white',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                                }}>
                                    TRENDING
                                </div>
                            </div>
                            <CardBody style={{ 
                                padding: '25px',
                                display: 'flex',
                                flexDirection: 'column',
                                flex: 1
                            }}>
                                <CardTitle tag="h5" style={{
                                    fontSize: '22px',
                                    fontWeight: '700',
                                    color: '#2d3748',
                                    marginBottom: '8px'
                                }}>
                                    Investment Portfolio
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-3"
                                    tag="h6"
                                    style={{
                                        color: '#f5576c',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        marginBottom: '15px'
                                    }}
                                >
                                    Diversified Growth
                                </CardSubtitle>
                                <CardText style={{
                                    color: '#718096',
                                    fontSize: '14px',
                                    lineHeight: '1.6',
                                    marginBottom: '20px',
                                    flex: 1
                                }}>
                                    Build wealth with our expertly managed investment portfolio. Maximize returns with diversified asset allocation.
                                </CardText>
                                <Button 
                                    onClick={toggle}
                                    style={{
                                        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                                        border: 'none',
                                        borderRadius: '10px',
                                        padding: '12px 24px',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        transition: 'all 0.3s',
                                        boxShadow: '0 4px 15px rgba(245, 87, 108, 0.3)',
                                        width: '100%'
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.transform = 'scale(1.05)';
                                        e.target.style.boxShadow = '0 6px 20px rgba(245, 87, 108, 0.5)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.transform = 'scale(1)';
                                        e.target.style.boxShadow = '0 4px 15px rgba(245, 87, 108, 0.3)';
                                    }}
                                >
                                    Add Transaction
                                </Button>
                            </CardBody>
                        </Card>
                        
                        <Card style={{
                            border: 'none',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            background: 'white',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                        }}>
                            <div style={{ 
                                position: 'relative', 
                                overflow: 'hidden',
                                height: '200px'
                            }}>
                                <CardImg
                                    alt="Business Account"
                                    src="https://picsum.photos/400/250?random=3"
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '15px',
                                    right: '15px',
                                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                                    color: 'white',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                                }}>
                                    BUSINESS
                                </div>
                            </div>
                            <CardBody style={{ 
                                padding: '25px',
                                display: 'flex',
                                flexDirection: 'column',
                                flex: 1
                            }}>
                                <CardTitle tag="h5" style={{
                                    fontSize: '22px',
                                    fontWeight: '700',
                                    color: '#2d3748',
                                    marginBottom: '8px'
                                }}>
                                    Business Account
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-3"
                                    tag="h6"
                                    style={{
                                        color: '#00f2fe',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        marginBottom: '15px'
                                    }}
                                >
                                    Professional Solutions
                                </CardSubtitle>
                                <CardText style={{
                                    color: '#718096',
                                    fontSize: '14px',
                                    lineHeight: '1.6',
                                    marginBottom: '20px',
                                    flex: 1
                                }}>
                                    Streamline your business finances with dedicated account management and advanced reporting tools.
                                </CardText>
                                <Button 
                                    onClick={toggle}
                                    style={{
                                        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                                        border: 'none',
                                        borderRadius: '10px',
                                        padding: '12px 24px',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        transition: 'all 0.3s',
                                        boxShadow: '0 4px 15px rgba(0, 242, 254, 0.3)',
                                        width: '100%'
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.transform = 'scale(1.05)';
                                        e.target.style.boxShadow = '0 6px 20px rgba(0, 242, 254, 0.5)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.transform = 'scale(1)';
                                        e.target.style.boxShadow = '0 4px 15px rgba(0, 242, 254, 0.3)';
                                    }}
                                >
                                    Add Transaction
                                </Button>
                            </CardBody>
                        </Card>

                        <Card style={{
                            border: 'none',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            background: 'white',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                        }}>
                            <div style={{ 
                                position: 'relative', 
                                overflow: 'hidden',
                                height: '200px'
                            }}>
                                <CardImg
                                    alt="Credit Card"
                                    src="https://picsum.photos/400/250?random=4"
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '15px',
                                    right: '15px',
                                    background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                                    color: 'white',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                                }}>
                                    EXCLUSIVE
                                </div>
                            </div>
                            <CardBody style={{ 
                                padding: '25px',
                                display: 'flex',
                                flexDirection: 'column',
                                flex: 1
                            }}>
                                <CardTitle tag="h5" style={{
                                    fontSize: '22px',
                                    fontWeight: '700',
                                    color: '#2d3748',
                                    marginBottom: '8px'
                                }}>
                                    Credit Card
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-3"
                                    tag="h6"
                                    style={{
                                        color: '#fa709a',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        marginBottom: '15px'
                                    }}
                                >
                                    Rewards & Cashback
                                </CardSubtitle>
                                <CardText style={{
                                    color: '#718096',
                                    fontSize: '14px',
                                    lineHeight: '1.6',
                                    marginBottom: '20px',
                                    flex: 1
                                }}>
                                    Enjoy exclusive rewards and cashback on every purchase. Build your credit score with responsible spending.
                                </CardText>
                                <Button 
                                    onClick={toggle}
                                    style={{
                                        background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                                        border: 'none',
                                        borderRadius: '10px',
                                        padding: '12px 24px',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        transition: 'all 0.3s',
                                        boxShadow: '0 4px 15px rgba(250, 112, 154, 0.3)',
                                        width: '100%'
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.transform = 'scale(1.05)';
                                        e.target.style.boxShadow = '0 6px 20px rgba(250, 112, 154, 0.5)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.transform = 'scale(1)';
                                        e.target.style.boxShadow = '0 4px 15px rgba(250, 112, 154, 0.3)';
                                    }}
                                >
                                    Add Transaction
                                </Button>
                            </CardBody>
                        </Card>

                        <Card style={{
                            border: 'none',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            background: 'white',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                        }}>
                            <div style={{ 
                                position: 'relative', 
                                overflow: 'hidden',
                                height: '200px'
                            }}>
                                <CardImg
                                    alt="Loan Services"
                                    src="https://picsum.photos/400/250?random=5"
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '15px',
                                    right: '15px',
                                    background: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
                                    color: 'white',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                                }}>
                                    FLEXIBLE
                                </div>
                            </div>
                            <CardBody style={{ 
                                padding: '25px',
                                display: 'flex',
                                flexDirection: 'column',
                                flex: 1
                            }}>
                                <CardTitle tag="h5" style={{
                                    fontSize: '22px',
                                    fontWeight: '700',
                                    color: '#2d3748',
                                    marginBottom: '8px'
                                }}>
                                    Loan Services
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-3"
                                    tag="h6"
                                    style={{
                                        color: '#30cfd0',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        marginBottom: '15px'
                                    }}
                                >
                                    Low Interest Rates
                                </CardSubtitle>
                                <CardText style={{
                                    color: '#718096',
                                    fontSize: '14px',
                                    lineHeight: '1.6',
                                    marginBottom: '20px',
                                    flex: 1
                                }}>
                                    Get instant approval on personal and business loans with competitive rates and flexible repayment terms.
                                </CardText>
                                <Button 
                                    onClick={toggle}
                                    style={{
                                        background: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
                                        border: 'none',
                                        borderRadius: '10px',
                                        padding: '12px 24px',
                                        fontWeight: '600',
                                        fontSize: '14px',
                                        transition: 'all 0.3s',
                                        boxShadow: '0 4px 15px rgba(48, 207, 208, 0.3)',
                                        width: '100%'
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.transform = 'scale(1.05)';
                                        e.target.style.boxShadow = '0 6px 20px rgba(48, 207, 208, 0.5)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.transform = 'scale(1)';
                                        e.target.style.boxShadow = '0 4px 15px rgba(48, 207, 208, 0.3)';
                                    }}
                                >
                                    Add Transaction
                                </Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </div>

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