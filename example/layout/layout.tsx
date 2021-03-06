import React from 'react';
import Layout from '../../lib/layout/layout';
import Header from '../../lib/layout/header';
import Panel from '../../lib/layout/panel';
import Footer from '../../lib/layout/footer';
import './layout.scss';
import {useTranslation} from 'react-i18next';

const LayoutExample: React.FunctionComponent = () => {
    const {t} = useTranslation();
    return (
        <div className={"layoutExample"}>
            <h4>{t('layout_example_1')}</h4>
            <div className={"container"}>
                <Layout style={{height: '300px'}}>
                    <Header>{t('header')}</Header>
                    <Panel>{t('main')}</Panel>
                    <Footer>{t('footer')}</Footer>
                </Layout>
            </div>
        </div>
    );
};

export default LayoutExample;
