
import React from 'react';
import { TopToolbar } from 'react-admin';
import { ProfilePreviewButton } from '../../components';

const CompanyDataListActions = (props) => (
    <TopToolbar>
        <ProfilePreviewButton variant="contained" color="primary" />
    </TopToolbar>
)

export default CompanyDataListActions

