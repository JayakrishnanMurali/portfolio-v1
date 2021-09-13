import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import PrimaryButton from "../Components/PrimaryButton";
import ContactItem from "../Components/ContactItem";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import EmailIcon from "@material-ui/icons/Email";

function ContactPage() {
  const phone = <PhoneIcon />;
  const location = <LocationOnIcon />;
  const emailVar = <EmailIcon />;

  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <form className="form">
              <div className="form-field">
                <label htmlFor="name">Enter your name*</label>
                <input type="text" id="name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Enter your email*</label>
                <input type="email" id="email" />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Enter your subject</label>
                <input type="subject" id="subject" />
              </div>
              <div className="form-field">
                <label htmlFor="textarea">Enter your Message*</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-field">
                <PrimaryButton title={"SEND EMAIL"} />
              </div>
            </form>
          </div>
          <div className="right-content">
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

    .right-content {
      display: flex;
      flex-direction: column;
    }
    .form {
      width: 100%;
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
          padding: inherit.4rem 0.5rem;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background-color: transparent;
          height: 50px;
          width: 100%;
          padding: 0 15px;
          color: inherit;
        }
        textarea {
          background: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
    }
  }
`;

export default ContactPage;
