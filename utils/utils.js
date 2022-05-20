const datatable = (tableID) => {
    $(tableID).DataTable({
    	"bFilter": false,
    	"paging": true,
    });
}

export default datatable;