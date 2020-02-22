import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const onSubmit = () => {
		if (firstName === "" || lastName === "") {
			M.toast({ html: "Please enter first and last name" });
		} else {
			console.log(firstName, lastName);

			// Clear fields
			setFirstName("");
			setLastName("");
		}
	};

	return (
		<div id="add-tech-modal" className="modal">
			<div className="modal-content">
				<h4>New Technician</h4>

				{/* First name */}
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="firstName"
							value={firstName}
							onChange={e => setFirstName(e.target.value)}
						/>
						<label htmlFor="firstName" className="active">
							First Name
						</label>
					</div>
				</div>

				{/* Last name */}
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="lastName"
							value={lastName}
							onChange={e => setLastName(e.target.value)}
						/>
						<label htmlFor="lastName" className="active">
							Last Name
						</label>
					</div>
				</div>
			</div>

			{/* Modal footer */}
			<div className="modal-footer">
				<button
					className="modal-close waves-effect blue waves-light btn"
					onClick={onSubmit}>
					Enter
				</button>
			</div>
		</div>
	);
};

export default AddTechModal;
