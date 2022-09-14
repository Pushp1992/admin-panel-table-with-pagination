import React, { useState, useEffect } from 'react';
import TableComponent from '../../component/pagination-table/pagination';
import * as DataService from '../../utils/service';

const {
    AdminPanelWrapper
} = require('./styles');

const AdminPage = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetchAdminData();
    }, []);

    const fetchAdminData = async () => {
        const adminData = await DataService.getAdminData();
        setTableData(adminData)
    };

    return (
        <AdminPanelWrapper>
            {!!tableData.length && <TableComponent items={tableData} />}
        </AdminPanelWrapper>
    )
}

AdminPage.displayName = 'AdminPage';

export default AdminPage;
