import React from "react";

const AddBtn = () => {
	return (
		<div className="fixed-action-btn">
			<button
				data-target="add-log-modal"
				className="btn-floating btn-large blue darken-2 modal-trigger">
				<i className="large material-icons">add</i>
			</button>
			<ul>
				<li>
					<button
						data-target="tech-list-modal"
						className="btn-floating green modal-trigger">
						<i className="material-icons">person</i>
					</button>
				</li>
				<li>
					<button
						data-target="add-tech-modal"
						className="btn-floating red modal-trigger">
						<i className="material-icons">person_add</i>
					</button>
				</li>
			</ul>
		</div>
	);
};

export default AddBtn;
