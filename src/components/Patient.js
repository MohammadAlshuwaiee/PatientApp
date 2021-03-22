import React from "react";
// import Patients from "../PatientData";
import { observer } from "mobx-react";
//styles
import { PatientWrapper } from "./styles";
import UpdateButton from "./buttons/updateButton";

import { Link } from "react-router-dom";

const Patient = (props) => {
  const patient = props.patient;

  return (
    <PatientWrapper>
      <Link to={`/Patients/${patient.slug}`}>
        <p className="patientlName">{patient.name}</p>
      </Link>
      <p className="hospitalName">{patient.hospital.name}</p>

      <UpdateButton patient={props.patient} />
    </PatientWrapper>
  );
};

export default observer(Patient);
