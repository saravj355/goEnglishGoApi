import data from "../database/verbs.json";

function getAllVerbs() {
	return data;
}
function createVerb(newVerb) {
	data.push({ id: 1, ...newVerb });
	return data;
}

function updateVerbById(verbId) {
	data.filter((data) => data.id === verbId);
}
function deleteVerbById() {}
function getVerbsByCategoryId() {}

export {
	getAllVerbs,
	createVerb,
	updateVerbById,
	deleteVerbById,
	getVerbsByCategoryId,
};
