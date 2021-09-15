import React from "react";
import styled from "styled-components";

function ContactItem({ icon, title, contact1, contact2 }) {
  return (
    <ContactItemSTyled>
      <div className="left-content">
        <p>{icon}</p>
      </div>
      <div className="right-content">
        <h6>{title}</h6>
        <p>{contact1}</p>
        <p>{contact2}</p>
      </div>
    </ContactItemSTyled>
  );
}

const ContactItemSTyled = styled.div`
  padding: 1.5rem 2rem;
  background-color: var(--background-dark-grey);
  display: flex;
  align-items: center;
  margin-top: 2rem;

  @media screen and (max-width: 540px) {
    height: 7rem;
    padding: 0.9rem;
  }

  .left-content {
    padding: 1rem;
    border: 1px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;

    @media screen and (max-width: 540px) {
      padding: 0.3rem;
    }

    svg {
      font-size: 2rem;
      @media screen and (max-width: 540px) {
        font-size: 1rem;
        padding: 0;
      }
    }
  }
  .right-content {
    h6 {
      color: var(--white-color);
      font-size: 0.918rem;
      padding-bottom: 0.6rem;
      @media screen and (max-width: 540px) {
        font-size: 0.818rem;
      }
    }
    p {
      font-size: 1rem;
      padding: 0.1rem 0;
      @media screen and (max-width: 540px) {
        font-size: 0.718rem;
      }
    }
  }
`;

export default ContactItem;
