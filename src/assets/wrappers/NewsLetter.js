import styled from "styled-components";

const Wrapper = styled.div`
  .form {
    width: var(--width);
    max-width: calc(700 / 16 * 1rem);
    .form-header {
      text-align: center;
      margin-bottom: 2rem;
    }
    .form-label {
      font-size: 1.2rem;
      font-weight: 700;
    }
    .form-input {
      margin-bottom: 1rem;
    }
    .form-btn {
      margin-top: 1rem;
      width: 100%;
    }
  }
`;

export default Wrapper;
