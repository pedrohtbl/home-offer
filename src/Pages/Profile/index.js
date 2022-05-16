import EditIcon from "../../assets/Vetor-Edit.svg";
import { useState } from "react";
import ModalCompany from "../../Components/Modal/modal-company";
import ModalProfile from "../../Components/Modal/modal-profile";
import { Container, Content, Menu, Title } from "./style";

const ProfilePage = () => {
  const [openModalCompany, setOpenModalCompany] = useState(false);
  const [openModalProfile, setOpenModalProfile] = useState(false);
  const userObj = JSON.parse(localStorage.getItem("@buyAnIdea:Login")) || {};

  const { user } = userObj;

  const { company, address, cnpj, name, lastName, cpf, email, phone } = user;

  const handleCloseCompany = () => setOpenModalCompany(false);

  const handleOpenCompany = () => {
    setOpenModalCompany(true);
  };

  const handleCloseProfile = () => setOpenModalProfile(false);

  const handleOpenProfile = () => {
    setOpenModalProfile(true);
  };

  return (
    <Container>
      <section>
        <Title>
          <h1>Meu perfil</h1>
          {openModalCompany && (
            <ModalCompany
              open={openModalCompany}
              handleClose={handleCloseCompany}
            />
          )}
          <button onClick={handleOpenCompany}>
            <img src={EditIcon} alt="icone-editar" />
          </button>
        </Title>

        <hr />

        <Content>
          <h2>{company.companyName}</h2>
          <h3>
            {address.city}, {address.uf}
          </h3>
          <ul>
            <li>Endereço: {address.street}</li>
            <li>CNPJ: {cnpj}</li>
            <li>Telefone comercial: companyPhone</li>
            <li>Email Comercial: companyEmail</li>
          </ul>
        </Content>
      </section>
      <section>
        <Title>
          <h1>Informações pessoais</h1>
          {openModalProfile && (
            <ModalProfile
              open={openModalProfile}
              handleClose={handleCloseProfile}
            />
          )}
          <button onClick={handleOpenProfile}>
            <img src={EditIcon} alt="icone-editar" />
          </button>
        </Title>

        <hr />

        <Content>
          <h2>
            {name} {lastName}
          </h2>
          <ul>
            <li>CPF: {cpf}</li>
            <li>Email: {email}</li>
            <li>Telefone: {phone}</li>
          </ul>
          <button>Alterar Senha</button>
        </Content>
      </section>
    </Container>
  );
};

export default ProfilePage;
