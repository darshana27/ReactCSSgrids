import React, {Component} from 'react';
import { Grid, Menu, Segment, Button, Icon, Label, Table, Checkbox } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";
import {connect} from 'react-redux';
import {fetchApiData} from '../redux/actions/index';


import './Home.css';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            activeItem: 'USD',
        };
        
    }
    
    componentDidMount() {
        console.log('=================>',this.props)
        this.props.fetchApiData();
    }
    
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
    }

    
    render() {
        console.log("------------------------> Props Data Results : ",this.props.data.results)
        return (
            <div className="wrapper">
                <div className="item1">InstaReM Pay-in</div>  
                <div className="item2"><Button basic color="black" content="Global Payment Receiving Accounts"/></div>  
                <div className="item3"><Button basic color="black" content="Request Payment"/></div>  
                <div className="item4">InstaReM pay-in service provides you with several international receiving accounts which enables you to receive payments from companies worldwide</div>  
                <div className="item5">using the InstaReM pay-in platform or provide your payment service information to the company thats needs to pay you.</div>  
                <div className="item6">
                    <Grid className="sgrid">
                        <Grid.Column width={1}>
                            <Menu fluid vertical pointing secondary padded="true">
                                <Menu.Item name="USD" active={this.state.activeItem == 'USD'} onClick={this.handleItemClick}/>
                                <Menu.Item name="EUR" active={this.state.activeItem == 'EUR'} onClick={this.handleItemClick}/>
                                <Menu.Item name="GBP" active={this.state.activeItem == 'GBP'} onClick={this.handleItemClick}/>
                                <Menu.Item name="SGD" active={this.state.activeItem == 'SGD'} onClick={this.handleItemClick}/>
                                <Menu.Item name="HKD" active={this.state.activeItem == 'HKD'} onClick={this.handleItemClick}/>
                            </Menu>
                        </Grid.Column>
                        <Grid.Column stretched width={15}>
                            <Segment stretched="true" padded>
                                Transactions in {this.state.activeItem}. &nbsp;Current Balance = {this.state.activeItem}1000 &nbsp; <button className="ui primary button">Convert &amp; Transfer Funds</button>
                                <Table celled>
                                    <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Invoice No.</Table.HeaderCell>
                                        <Table.HeaderCell>Invoice status</Table.HeaderCell>
                                        <Table.HeaderCell>Invoice Amount</Table.HeaderCell>
                                        <Table.HeaderCell>Amount Paid</Table.HeaderCell>
                                        <Table.HeaderCell>PO</Table.HeaderCell>
                                        <Table.HeaderCell>Invoice Date</Table.HeaderCell>
                                        <Table.HeaderCell>Due Date</Table.HeaderCell>
                                        <Table.HeaderCell>Payment Terms</Table.HeaderCell>
                                        <Table.HeaderCell>Payment Date</Table.HeaderCell>
                                        <Table.HeaderCell>Payment Reference</Table.HeaderCell>
                                        <Table.HeaderCell>Actions</Table.HeaderCell>
                                    </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                     
                                        {this.props.data.results && 
                                                    this.props.data.results.map((elem, idx) => {
                                                        console.log(elem)
                                                        return(
                                                            <Table.Row>  
                                                                <Table.Cell collapsing>
                                                                    <Checkbox />    
                                                                </Table.Cell>
                                                                <Table.Cell>{elem.name}</Table.Cell>
                                                                <Table.Cell>{elem.rotation_period}</Table.Cell>
                                                                <Table.Cell>{elem.orbital_period}</Table.Cell>
                                                                <Table.Cell>{elem.gravity}</Table.Cell>
                                                                <Table.Cell>{elem.created}</Table.Cell>
                                                                <Table.Cell>{elem.edited}</Table.Cell>
                                                                <Table.Cell>{elem.climate}</Table.Cell>
                                                                <Table.Cell>{elem.surface_water}</Table.Cell>
                                                                <Table.Cell>{elem.name}</Table.Cell>
                                                                <Table.Cell><a href=""> > View Details</a><br></br><a href="">> Convert & transfer funds</a></Table.Cell>
                                                        </Table.Row>
                                                        )
                                                    })
                                            }
                       
                                    </Table.Body>

                                    <Table.Footer>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='3'>
                                        <Menu floated='right' pagination>
                                            <Menu.Item as='a' icon>
                                            <Icon name='chevron left' />
                                            </Menu.Item>
                                            <Menu.Item as='a'>1</Menu.Item>
                                            <Menu.Item as='a'>2</Menu.Item>
                                            <Menu.Item as='a'>3</Menu.Item>
                                            <Menu.Item as='a'>4</Menu.Item>
                                            <Menu.Item as='a' icon>
                                            <Icon name='chevron right' />
                                            </Menu.Item>
                                        </Menu>
                                        </Table.HeaderCell>
                                    </Table.Row>
                                    </Table.Footer>
                                </Table>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </div>  
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
      data: state.data
    };
  };
  export default connect(
    mapStateToProps,
    {fetchApiData}
  )(Home)