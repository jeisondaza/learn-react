import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
    return (
        <div>
            <h3>Data table</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Constellation</th>
                        <th>Acctions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map(el => (
                            <CrudTableRow
                                el={el}
                                key={el.id}
                                setDataToEdit={setDataToEdit}
                                deleteData={deleteData}
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">Not Data</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default CrudTable;