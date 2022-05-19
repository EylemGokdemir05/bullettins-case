import React, { useState, useEffect, useContext } from "react";
import data from "../data/bulten_data.json";
import ContextState from "../context/store";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: grey;
  box-sizing: border-box;
  z-index: 99;
  transition: right 0.2s;

  @media screen and (max-width: 600px) {
    width: 450px;
  }
`;

const StyledCardBtn = styled.button`
  border: 0;
  padding: 0;
  width: 50px;
  height: 50px;
  color: #ececec;
  background-color: grey;
  text-align: center;
  line-height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 2;

  &:focus-visible {
    outline: 3px solid #d50000;
  }

  &:hover {
    filter: brightness(85%);
  }
`;

const BasketIcon = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-right: 15px;
  background-image: url(${require("../assets/basket.png")});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-size: 50%;
`;

const CartQuantity = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  color: #0c0b10;
  font-weight: bold;
  font-size: 0.7em;
  text-align: center;
  line-height: 18px;
  border-radius: 50%;
  background-color: #d50000;
  position: absolute;
  bottom: 0;
  right: 5px;
`;

const CartContent = styled.div`
  height: 100%;
  overflow-y: scroll;

  @media screen and (min-width: 640px) {
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 10px;
      background-color: rgba(0, 0, 0, 0.2);
      padding: 10px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: #0c0b10;
    }
  }
`;

const CartContentHeader = styled.div`
  color: #ececec;
  box-sizing: border-box;
  text-align: center;
  padding: 45px 0;
`;

const HeaderTitle = styled.span`
  font-weight: bold;
  font-size: 1.2em;
  vertical-align: middle;
`;

const TotalTitle = styled.p`
  font-size: 22px;
  margin: 0;
`;

const CardBulletins = (bullettins) => {
  return (
    <StyledContainer>
      {bullettins?.length
        ? bullettins.map((bullettin) => {
            <span>{bullettin.item[1].D}</span>;
          })
        : null}
    </StyledContainer>
  );
};

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(ContextState);
  console.log("CARD context info: ", context);

  useEffect(() => {
    console.log("CARD useEffect!");
  }, []);

  const handleToggleCard = (isOpen) => {
    console.log("card isOpen: ", isOpen);
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <StyledContainer style={{ right: isOpen ? "0" : "100%" }}>
      <StyledCardBtn onClick={handleToggleCard(isOpen)}>
        {isOpen ? (
          <span>X</span>
        ) : (
          <BasketIcon>
            <CartQuantity>{context.total}</CartQuantity>
          </BasketIcon>
        )}
      </StyledCardBtn>
      {isOpen && (
        <>
        {context.bullettins.map((item)=>{
            return (
                <>
                    <CartContent>
                        <CartContentHeader>
                        <BasketIcon>
                            <CartQuantity>{item[1].N}</CartQuantity>
                        </BasketIcon>
                        </CartContentHeader>
                        {/* <CardBulletins bullettins={context.bullettins.item[1]} /> */}
                    </CartContent>
                    <CartContent>
                        <TotalTitle>{context.total}</TotalTitle>
                    </CartContent>
                </>
            )
            
        })}
          
        </>
      )}
    </StyledContainer>
  );
};

export default Card;
