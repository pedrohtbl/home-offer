import { EditProfileProvider } from "./EditProfile";
import { InterpriseListProvider } from "./interpriseList";
import { LoginProvider } from "./Login";
import { MatchProvider } from "./Match";
import { ModalProvider } from "./Modal";
import { RegisterProvider } from "./Register";
import { AddIdeaProvider } from "./Add-Idea";
import { PageLinkProvider } from "./PageLink";
import { MessageProvider } from "./Message";

const Providers = ({ children }) => {
	return (
		<>
			<RegisterProvider>
				<LoginProvider>
					<MatchProvider>
						<ModalProvider>
							<InterpriseListProvider>
								<PageLinkProvider>
									<EditProfileProvider>
										<MessageProvider>
											{children}
										</MessageProvider>
									</EditProfileProvider>
								</PageLinkProvider>
							</InterpriseListProvider>
						</ModalProvider>
					</MatchProvider>
				</LoginProvider>
			</RegisterProvider>
		</>
	);
};

export default Providers;
