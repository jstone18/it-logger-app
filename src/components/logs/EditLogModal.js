import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateLog } from "../../redux/actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";
import TechSelectOptions from "../techs/TechSelectOptions";

const EditLogModal = ({ updateLog, current }) => {
	const [message, setMessage] = useState("");
	const [attention, setAttention] = useState(false);
	const [tech, setTech] = useState("");

	useEffect(() => {
		if (current) {
			setMessage(current.message);
			setAttention(current.attention);
			setTech(current.tech);
		}
	}, [current]);

	const onSubmit = () => {
		if (message === "" || tech === "") {
			M.toast({ html: "Please enter a message and tech" });
		} else {
			const updLog = {
				id: current.id,
				message,
				tech,
				attention,
				date: new Date()
			};

			updateLog(updLog);

			M.toast({ html: `Log updated by ${tech}` });
		}
	};

	return (
		<div id="edit-log-modal" className="modal" style={modalStyle}>
			<div className="modal-content">
				<h4>Edit System Log</h4>

				{/* Log message */}
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="message"
							value={message}
							onChange={e => setMessage(e.target.value)}
						/>
					</div>
				</div>

				{/* Select tech */}
				<div className="row">
					<div className="input-field">
						<select
							name="tech"
							value={tech}
							className="browser-default"
							onChange={e => setTech(e.target.value)}>
							<option value="" disabled>
								Select Technician
							</option>
							<TechSelectOptions />
						</select>
					</div>
				</div>

				{/* Attention checkbox */}
				<div className="row">
					<div className="input-field">
						<p>
							<label>
								<input
									type="checkbox"
									className="filled-in"
									checked={attention}
									value={attention}
									onChange={e => setAttention(!attention)}
								/>
								<span>Needs Attention</span>
							</label>
						</p>
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

EditLogModal.propTypes = {
	updateLog: PropTypes.func.isRequired
};

const modalStyle = {
	width: "75%",
	height: "75%"
};

const mapStateToProps = state => ({
	current: state.log.current
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
