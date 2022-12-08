import React from "react";
import { ContainerCategoryBox, RowCategoryBox } from "./CategoryBox_styled";
import { VscFlame } from "react-icons/vsc";

const CategoryBox = () => {
  return (
    <ContainerCategoryBox>
      <RowCategoryBox>
        <button>
          <VscFlame />
          flames!
        </button>
        <button>
          <VscFlame />
          worst
        </button>
        <button>
          <VscFlame />
          social
        </button>
        <button>
          <VscFlame />
          games
        </button>
        <button>
          <VscFlame />
          wellness
        </button>
        <button>
          <VscFlame />
          buy
        </button>
        <button>
          <VscFlame />
          productivity
        </button>
      </RowCategoryBox>
    </ContainerCategoryBox>
  );
};

export default CategoryBox;
