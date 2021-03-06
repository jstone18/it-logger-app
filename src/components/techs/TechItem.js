import React from "react";
import { connect } from "react-redux";
import { deleteTech } from "../../redux/actions/techActions";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

const TechItem = ({ tech, deleteTech }) => {
	const onDelete = () => {
		deleteTech(tech.id);
		M.toast({ html: `Tech ${tech.firstName} ${tech.lastName} was deleted` });
	};
	return (
		<li className="collection-item">
			<div>
				{tech.firstName} {tech.lastName}
				<a href="#!" className="secondary-content" onClick={onDelete}>
					<i className="material-icons grey-text">delete</i>
				</a>
			</div>
		</li>
	);
};

TechItem.propTypes = {
	tech: PropTypes.object.isRequired
};

export default connect(null, { deleteTech })(TechItem);
