import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getLogs } from "../../redux/actions/logActions";

import LogItems from "./LogItems";
import PreLoader from "../layout/PreLoader";
import PropTypes from "prop-types";

const Logs = ({ log: { logs, loading }, getLogs }) => {
	useEffect(() => {
		getLogs();
	}, []);

	if (loading || logs === null) {
		return <PreLoader />;
	}

	return (
		<ul className="collection with-header">
			<li className="collection-header">
				<h4 className="center">System Logs</h4>
			</li>
			{!loading && logs.length === 0 ? (
				<p className="center">No logs to show...</p>
			) : (
				logs.map(log => <LogItems key={log.id} log={log} />)
			)}
		</ul>
	);
};

Logs.propTypes = {
	log: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	log: state.log
});

export default connect(mapStateToProps, { getLogs })(Logs);
