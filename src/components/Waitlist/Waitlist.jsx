// DEPENDENCIES
// import { Waitlist as WaitlistApi } from 'waitlistapi';
import React, { useState } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Users } from "../../services";

// COMPONENTS
import {
    Section,
    Header,
    HeaderTitle,
    Title,
    Span,
    Star,
    Caption,
    Container,
    Wrapper,
    Card,
    Sticker,
    Content,
    Icon,
    ContentTitle,
    Body,
    Widget,
    Form,
    FormTitle,
    FormRow,
    FieldWrap,
    Field,
    Error,
    Status,
    StatusTitle,
    StatusRow,
    StatusContent,
    StatusSubtitle,
    StatusStats,
    ReferralLink
} from "./styles"
import Button from "../Button";
import Loader from "react-loader-spinner";

// STYLES
import "./waitlist.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// ASSETS
import background from "./assets/background.jpg";
import star from "./assets/star.png";
import sticker from "./assets/waitlist.png"
import icon from "./assets/waitlist_star.png";

// Formik Initial Values
const WaitlistInitial = {
    firstName: '', 
    lastName: '', 
    email: '', 
    url: '',
    position: ''
}

const StatusInitial = {
    email: ''
}

// Formik Validation Schema
const WaitlistSchema = Yup.object().shape({
    firstName: Yup.string().required('This field is required'),
    lastName: Yup.string().required('This field is required'),
    email: Yup.string().email('Invalid email').required('This field is required'),
    url: Yup.string().required('This field is required'),
    position: Yup.string().required('This field is required'),
    referralLink: Yup.string()
})

const StatusSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('This field is required')
})

// Formik Email Validation
function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
}

// Copied button theme
const copiedTheme = {
    background: "var(--yellow-main)",
    borderColor: "transparent",
    color: "var(--muted-dark)",
    hoverColor: "var(--muted-dark)",
    hoverShadow: "var(--hover-drop-shadow)",
    cursor: "default"
}

const FormWidget = () => {
    const [status, setStatus] = useState(false);
    const [isData, setIsData] = useState(false);
    const [userData, setUserData] = useState(null);
    const [copied, isCopied] = useState(false);

    // Status: Copy Link to Clipboard
    function clipboardHandler() {
        navigator.clipboard.writeText(userData.referral_link)
        isCopied(true);
        setTimeout(() => isCopied(false), 4000);
    }

    return (
        <Widget>
            {
                isData
                ?
                    <>
                        {
                            userData && userData
                            ?
                                <Status>
                                    <StatusTitle>Skip the lines when you refer your fellow creators.</StatusTitle>
                                    <StatusRow>
                                        <StatusContent>
                                            <StatusSubtitle>Your position on the waitlist:</StatusSubtitle>
                                            <StatusStats>{userData.current_priority} / {userData.total_users}</StatusStats>
                                        </StatusContent>
                                        <StatusContent>
                                            <StatusSubtitle>Creators you have referred:</StatusSubtitle>
                                            <StatusStats>{userData.total_referrals}</StatusStats>
                                        </StatusContent>
                                    </StatusRow>
                                    <ReferralLink>{userData.referral_link}</ReferralLink>
                                    <Button style={copied ? copiedTheme : null} label={copied ? `Copied!` : `Copy Link`} onClick={() => clipboardHandler()} />
                                </Status>
                            :
                                <Loader
                                    type="ThreeDots"
                                    color="#FFC700"
                                    height={100}
                                    width={100}
                                    timeout={3000} //3 secs
                                />
                        }
                    </>
                :
                <>
                    <FormTitle>{status ? "Check your Status" : "Hey, you!"}</FormTitle>
                    {
                        status
                        ?
                            <Formik
                                initialValues={StatusInitial}
                                validationSchema={StatusSchema}
                                onSubmit={values => {
                                    try {
                                        Users.getWaitlistStatus({
                                            email: values.email
                                        }).then(res => {
                                            // Change User Status Data
                                            setIsData(true);
                                            setUserData(res);
                                        })
                                    } catch (err) {
                                        console.log("Failed due to:", err)
                                    }
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    setFieldValue,
                                    handleSubmit,
                                    isSubmitting,
                                /* and other goodies */
                                }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <FormRow>
                                            <FieldWrap>
                                                <Field 
                                                    name={`email`} 
                                                    value={values[`email`]} 
                                                    placeholder="Email" 
                                                    onChange={e => setFieldValue('email', e.target.value)} 
                                                    validate={validateEmail}
                                                />
                                                {errors.email && touched.email ?
                                                    <Error>{errors.email}</Error>        
                                                : null}
                                            </FieldWrap>
                                        </FormRow>
                                        <FormRow className="buttons">
                                            <Button type="submit" label="Check your Status" width="100%" disabled={isSubmitting} />
                                        </FormRow>
                                        <FormRow>
                                            <Button type="button" label="Join the Waitlist" reverse={true} width="100%" onClick={() => setStatus(!status)} />
                                        </FormRow>
                                    </Form>
                                )}
                            </Formik>
                        :
                            <Formik
                                initialValues={WaitlistInitial}
                                validationSchema={WaitlistSchema}
                                onSubmit={values => {
                                    try {
                                        Users.postWaitlistUser({
                                            firstName: values.firstName,
                                            lastName: values.lastName,
                                            email: values.email,
                                            url: values.url,
                                            position: values.position,
                                            referralLink: document.URL
                                        }).then(res => {
                                            // Change User Status Data
                                            setIsData(true);
                                            setUserData(res);
                                        })
                                    } catch (err) {
                                        console.log("Failed due to:", err)
                                    }
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    setFieldValue,
                                    handleSubmit,
                                    isSubmitting,
                                /* and other goodies */
                                }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <FormRow>
                                            <FieldWrap className="row">
                                                <Field 
                                                    name={`firstName`} 
                                                    value={values[`firstName`]} 
                                                    placeholder="First Name" 
                                                    onChange={e => setFieldValue('firstName', e.target.value)} 
                                                />
                                                {errors.firstName && touched.firstName ?
                                                    <Error>{errors.firstName}</Error>        
                                                : null}
                                            </FieldWrap>
                                            <FieldWrap className="row">
                                                <Field 
                                                    name={`lastName`} 
                                                    value={values[`lastName`]} 
                                                    placeholder="Last Name" 
                                                    onChange={e => setFieldValue('lastName', e.target.value)} 
                                                />
                                                {errors.lastName && touched.lastName ?
                                                    <Error>{errors.lastName}</Error>        
                                                : null}
                                            </FieldWrap>
                                        </FormRow>
                                        <FormRow>
                                            <FieldWrap>
                                                <Field 
                                                    name={`email`} 
                                                    value={values[`email`]} 
                                                    placeholder="Email" 
                                                    onChange={e => setFieldValue('email', e.target.value)} 
                                                    validate={validateEmail}
                                                />
                                                {errors.email && touched.email ?
                                                    <Error>{errors.email}</Error>        
                                                : null}
                                            </FieldWrap>
                                        </FormRow>
                                        <FormRow>
                                            <FieldWrap>
                                                <Field 
                                                    name={`url`} 
                                                    value={values[`url`]} 
                                                    placeholder="Community Page URL (any social media)" 
                                                    onChange={e => setFieldValue('url', e.target.value)}
                                                />
                                                {errors.url && touched.url ?
                                                    <Error>{errors.url}</Error>        
                                                : null}
                                            </FieldWrap>
                                        </FormRow>
                                        <FormRow>
                                            <FieldWrap>
                                                <Field 
                                                    name={`position`} 
                                                    value={values[`position`]} 
                                                    placeholder="Contact Person Position" 
                                                    onChange={e => setFieldValue('position', e.target.value)}
                                                />
                                                {errors.position && touched.position ?
                                                    <Error>{errors.position}</Error>        
                                                : null}
                                            </FieldWrap>
                                        </FormRow>
                                        <FormRow className="buttons">
                                            <Button type="submit" label="Join the Waitlist" width="100%" disabled={isSubmitting} />
                                        </FormRow>
                                        <FormRow>
                                            <Button type="button" label="Check your Status" reverse={true} width="100%" onClick={() => setStatus(!status)} />
                                        </FormRow>
                                    </Form>
                                )}
                            </Formik>
                    }
                </>
            }
        </Widget>
    )
}

const Waitlist = () => (
    <Section id="waitlist">
        <Header>
            <HeaderTitle>
                <Star src={star} alt="Murch Star" className="left" />
                <Title className="fredoka-one">
                    Are you ready to
                    <Span className="fredoka-one"> sell your story</Span>?
                </Title>
                <Star src={star} alt="Murch Star" className="right" />
            </HeaderTitle>
            <Caption>Join our waitlist and be one of the first to try Murch when we launch in private beta.</Caption>
        </Header>

        <Container style={{ backgroundImage: `url(${background})` }}>
            <Wrapper>
                <Sticker src={sticker} alt="Murch Sticker" className="left" />
                <Card>
                    <Content>
                        <Icon src={icon} alt="Star" />
                        <ContentTitle className="fredoka-one">Get early access</ContentTitle>
                        <Body className="open-sans">By signing up, you’ll be part of an exclusive community — gaining the latest news &amp; updates on Murch, and our partners!</Body>
                    </Content>

                    <FormWidget />
                </Card>
                <Sticker src={sticker} alt="Murch Sticker" className="right" />
            </Wrapper>
        </Container>
    </Section>
)

export default Waitlist;