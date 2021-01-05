import styled, { createGlobalStyle } from "styled-components";

export const ProductWrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;

    &.product-price {
      color: ${(props) => props.theme.pink};
    }
  }
`;

export const Description = styled.h4`
  text-align: center;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.black};
    background-color: ${(props) => props.theme.white}
  }
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;
