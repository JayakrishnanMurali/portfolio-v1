import React, { useState } from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import PrimaryButton from "../Components/PrimaryButton";
import ContactItem from "../Components/ContactItem";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";
import emailjs from "emailjs-com";

const Result = () => {
  return alert(
    "Your message has been successfully sent. I will contact you soon."
  );
};

function ContactPage() {
  const phone = <PhoneIcon />;
  const location = <LocationOnIcon />;
  const emailVar = <EmailIcon />;

  const [result, setResult] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b8o4con",
        "template_b9xlebz",
        e.target,
        "user_w6sa2QfenZgqD6aOvsf9n"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    setResult(true);
    e.target.reset();
    setResult(false);
  }

  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="lefts-content">
            <form className="form" onSubmit={sendEmail}>
              <div className="form-field">
                <label htmlFor="name">Enter your name*</label>
                <input type="text" id="name" name="user_name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Enter your email*</label>
                <input type="email" id="email" name="user_email" />
              </div>
              <div className="form-field">
                <label htmlFor="subject" name="subject">
                  Enter your subject
                </label>
                <input type="subject" id="subject" />
              </div>
              <div className="form-field">
                <label htmlFor="textarea">Enter your Message*</label>
                <textarea
                  name="message"
                  id="textarea"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button type="submit" className=" btn form-field center-button">
                <PrimaryButton title={"SEND EMAIL"} />
              </button>

              <div className="row">{result ? <Result /> : null}</div>
            </form>
          </div>
          <div className="rights-content">
            <ContactItem
              icon={phone}
              title={"Phone"}
              contact1={"+91 8921474010"}
              contact2={"+91 8891661323"}
            />
            <ContactItem
              icon={emailVar}
              title={"Email"}
              contact1={"jayakrishnan1012@gmail.com"}
            />
            <ContactItem
              icon={location}
              title={"Location"}
              contact1={"Devi Nivas, Cherthala CMC 27, Alappuzha"}
              contact2={"Kerala, India"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    .lefts-content {
      @media screen and (max-width: 540px) {
        width: 100%;
      }
    }
    @media screen and (max-width: 540px) {
      width: 70%;
      grid-template-columns: repeat(1, 1fr);
    }
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media screen and (max-width: 960px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .rights-content {
      display: flex;
      flex-direction: column;

      @media screen and (max-width: 540px) {
        width: 100%;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 540px) {
        width: 100%;
      }
      .center-button {
        @media screen and (max-width: 700px) {
          text-align: center;
        }
        @media screen and (max-width: 960px) {
          text-align: center;
        }
      }
      .btn {
        background-color: transparent;
        border: none;
        outline: none;
      }
      .form-field {
        margin-top: 2rem;
        width: 100%;

        position: relative;
        label {
          position: absolute;
          left: 20px;
          top: -15px;
          font-size: 0.918rem;
          display: inline-block;
          background-color: var(--background-dark-color);
          @media screen and (max-width: 540px) {
            font-size: 0.718rem;
          }
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background-color: transparent;
          height: 50px;
          width: 100%;
          padding: 0 15px;
          color: inherit;
          @media screen and (max-width: 700px) {
            font-size: 1rem;
          }
          @media screen and (max-width: 700px) {
            font-size: 0.918rem;
          }
        }
        textarea {
          background: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
          @media screen and (max-width: 540px) {
            height: 9rem;
          }
        }
      }
    }
  }
`;

export default ContactPage;
