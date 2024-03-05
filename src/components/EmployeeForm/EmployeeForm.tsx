import { useState, ChangeEvent, SetStateAction, Dispatch } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { EmployeeInfo } from "./types";
import {
  EmployeeFormWrapper,
  EmployeeFormContainer,
  EmployeeCard,
  EmployeeInfoContainer,
  EmployeeInfoText,
  EmployeeTitle,
  EmployeeErrorMassage,
  InputContainer,
} from "./styles";

function EmployeeForm() {
  const schema = Yup.object().shape({
    name: Yup.string()
      .required("обязательное поле")
      .min(2, "минимальное количество символов - 2")
      .max(50, "максимальное количество символов - 50"),
    lastName: Yup.string()
      .required("обязательное поле")
      .max(15, "максимальное количество символов - 15"),
    ageValue: Yup.number().required("обязательное поле").min(0).max(999),
    jobPosition: Yup.string().max(30, "максимальное количество символов - 30"),
    rulesOfUse: Yup.boolean().isTrue(
      "Вы должны согласиться с правилами использования"
    ),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      ageValue: 0,
      jobPosition: "",
      rulesOfUse: false,
    } as EmployeeInfo,
    validationSchema: schema,
    onSubmit: (values: EmployeeInfo) => {},
  });

  const [isShowCard, setIsShowCard] = useState<boolean>(false);
  const [rulesOfUse, setRulesOfUse] = useState<boolean>(false);
  const [showErrors, setshowErrors] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [jobPosition, setjobPosition] = useState<string>("");

  const createEmployeeCard = () => {
    setshowErrors(true);
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length === 0) {
        setIsShowCard(true);
        setName(formik.values.name);
        setLastName(formik.values.lastName);
        setAge(formik.values.ageValue);
        setjobPosition(formik.values.jobPosition);
      }
    });
  };

  return (
    <EmployeeFormWrapper>
      <EmployeeFormContainer>
        <InputContainer>
          <Input
            id="first_name_id"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            label="Имя*"
            placeholder="Иван"
          />
          <EmployeeErrorMassage>
            {showErrors && formik.errors.name}
          </EmployeeErrorMassage>
        </InputContainer>
        <InputContainer>
          <Input
            id="last_name_id"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            label="Фамилия*"
            placeholder="Василевский"
          />
          <EmployeeErrorMassage>
            {showErrors && formik.errors.lastName}
          </EmployeeErrorMassage>
        </InputContainer>
        <InputContainer>
          <Input
            id="age_id"
            name="ageValue"
            onChange={formik.handleChange}
            value={formik.values.ageValue}
            label="Возраст*"
            placeholder="25"
          />
          <EmployeeErrorMassage>
            {showErrors && formik.errors.ageValue}
          </EmployeeErrorMassage>
        </InputContainer>
        <InputContainer>
          <Input
            id="job_position_id"
            name="jobPosition"
            onChange={formik.handleChange}
            value={formik.values.jobPosition}
            label="Должность"
            placeholder="Старший специалист"
          />
        </InputContainer>
        <label>
          <input
            type="checkbox"
            onChange={() => {
              setRulesOfUse(true);
              formik.setFieldValue("rulesOfUse", true);
            }}
            checked={rulesOfUse}
          />
          <p>Я согласен с политикой обработкой данных</p>
          <EmployeeErrorMassage>
            {showErrors && formik.errors.rulesOfUse}
          </EmployeeErrorMassage>
        </label>
        <Button name="Создать" onClick={createEmployeeCard} />
      </EmployeeFormContainer>
      {/* Если в левой части от && у вас false, то правая часть(JSX элементы) не показываются, 
      если же левая часть от && true, то правая часть(JSX элементы) отображается */}
      {isShowCard && (
        <EmployeeCard>
          <EmployeeInfoContainer>
            <EmployeeTitle>Имя</EmployeeTitle>
            <EmployeeInfoText>{name}</EmployeeInfoText>
          </EmployeeInfoContainer>
          <EmployeeInfoContainer>
            <EmployeeTitle>Фамилия</EmployeeTitle>
            <EmployeeInfoText>{lastName}</EmployeeInfoText>
          </EmployeeInfoContainer>
          <EmployeeInfoContainer>
            <EmployeeTitle>Возраст</EmployeeTitle>
            <EmployeeInfoText>{age}</EmployeeInfoText>
          </EmployeeInfoContainer>
          <EmployeeInfoContainer>
            <EmployeeTitle>Должность</EmployeeTitle>
            <EmployeeInfoText>{jobPosition}</EmployeeInfoText>
          </EmployeeInfoContainer>
        </EmployeeCard>
      )}
    </EmployeeFormWrapper>
  );
}

export default EmployeeForm;
