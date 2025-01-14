import EditIcon from "../../assets/Vetor-Edit.svg";
import { useEffect, useMemo, useState } from "react";
import ModalCompany from "../../Components/ModalProfile/modal-company";
import ModalProfile from "../../Components/ModalProfile/modal-profile";
import { Container, BoxContainer, Content, Title } from "./style";
import {
	FiMapPin,
	FiUser,
	FiPhone,
	FiMail,
	FiCreditCard,
} from "react-icons/fi";
import Menu from "../../Components/Menu";
import { Redirect } from "react-router-dom";
import { useEditProfile } from "../../Providers/EditProfile";
import { useLogin } from "../../Providers/Login";
import { api } from "../../Services/api";
import Loading from "../../Components/Loading";

const EmpreProfile = () => {
	const [openModalCompany, setOpenModalCompany] = useState(false);
	const [openModalProfile, setOpenModalProfile] = useState(false);
	const {user} = useLogin()
	const {editUser,setEditUser, isLoading, setIsLoading} = useEditProfile()
	

	 useEffect(()=>{
		user&&api.get(`/users/${user.user.id}`,{
			headers:{
				Authorization: `Bearer ${user.accessToken}`
			}
		})
		.then(res =>{
			setTimeout(()=>{
				setIsLoading(true)
			},1500)
			setEditUser(res.data)
		})
	},[isLoading]) 
	/* const {name,email,lastName,cpf,company,address,phone} = editUser
	const {street, district, uf,number,cep,city} = address
	const {companyEmail, companyName,companyPhone,cnpj} = company */

	const handleCloseCompany = () => setOpenModalCompany(false);

	const handleOpenCompany = () => {
		setOpenModalCompany(true);
	};

	const handleCloseProfile = () => setOpenModalProfile(false);

	const handleOpenProfile = () => {
		setOpenModalProfile(true);
	};

	return (
			<>

			{ !isLoading ? <Loading/> :
				<>
					<BoxContainer>
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
					<h2>{editUser&&editUser.company.companyName}</h2>
					<h3>
						{editUser&&editUser.address.city}, {editUser&&editUser.address.uf}
					</h3>
					<ul>
						<li>
							<FiMapPin />
							Endereço
							<p>
								{editUser&&editUser.address.street} {editUser&&editUser.address.number} - {editUser&&editUser.address.district}, {editUser&&editUser.address.cep}
							</p>
						</li>
						<li>
							<FiCreditCard />
							CNPJ
							<p>{editUser&&editUser.company.cnpj}</p>
						</li>
						<li>
							<FiPhone />
							Telefone comercial
							<p>{editUser&&editUser.company.companyPhone}</p>
						</li>
						<li>
							<FiMail />
							Email Comercial
							<p>{editUser&&editUser.company.companyEmail}</p>
						</li>
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
						<FiUser /> {editUser&&editUser.name} {editUser&&editUser.lastName}
					</h2>
					<ul>
						<li>
							<FiCreditCard />
							CPF
							<p>{editUser&&editUser.cpf}</p>
						</li>
						<li>
							<FiMail />
							Email
							<p>{editUser&&editUser.email}</p>
						</li>
						<li>
							<FiPhone />
							Telefone
							<p>{editUser&&editUser.phone}</p>
						</li>
					</ul>
				</Content>
			</section>
		</BoxContainer>
				</>
		}
		</>
	);
};

export default EmpreProfile;
