import React, { Component, PropTypes } from 'react';

import ButtonLink from '../../components/admin/ButtonLink';
import Container from '../../components/admin/Container';
import Grid from '../../components/admin/Grid';
import Navbar from '../../components/admin/Navbar';
import Panel from '../../components/admin/Panel';
import Search from '../../components/admin/Search';

import { capitalizeFirstLetter } from '../../utils/utils';

/**
* Crud container
*/
export default class Crud extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let data = this.props.route.model;
        let title_crud = capitalizeFirstLetter(data.title_crud);
        let columns = data.columns;
        let urlCreate = '#/' + data.model.toLowerCase() + '/' + 'add';

        return (
            <div>
                <Navbar name_admin={ data.name_admin } />
                <Container>
                    <Panel title={title_crud} width_panel="100%" style={{marginBottom: '1em'}}>
                        <div className="pull-left">
                            <ButtonLink link={urlCreate} classButton={"default"} text={"Add record"} />
                        </div>
                        <div className="pull-right" style={{marginBottom: '1em'}}>
                            <Search model={data} />
                        </div>
                        <div style={{marginTop: '3em'}}>
                            <Grid model={data} />
                        </div>
                    </Panel>
                </Container>
            </div>
        );
    }
}

Crud.propTypes = {
    model: PropTypes.object
}