import React, {Component} from 'react';
import { Grid, Menu, Segment, Button, Icon, Label, Table, Checkbox } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";
import {connect} from 'react-redux';
import {fetchApiData} from '../redux/actions/index';
import ReactTable from "react-table";


import './reacttable.css';

class Reacttable extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            activeItem: 'USD',
            data:[]
        };
        this.btnClick = this.btnClick.bind(this)
    }
    
    componentDidMount() {
        console.log('=================>',this.props)
        this.props.fetchApiData();
    }
    
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
    }

    btnClick = (value) => {
        console.log(value)
    }
    
    render() {
        console.log("------------------------> Props Data Results : ",this.props.data.results)

        const columns = [
            {Header:'Invoice No.', accessor: 'invoiceno'},
            {Header:'Invoice status', accessor: 'invoicestatus'},
            {Header:'Invoice Amount', accessor: 'invoiceamount'},
            {Header:'Invoice Paid', accessor: 'invoicepaid'},
            {Header:'PO', accessor: 'po'},
            {Header:'Invoice Date', accessor: 'invoicedate'},
            {Header:'Due Date', accessor: 'duedate'},
            {Header:'Payment Terms', accessor: 'paymentterms'},
            {Header:'Payment Date', accessor: 'paymentdate'},
            {Header:'Payment Reference', accessor: 'paymenreference'},
            {Header:'Actions', accessor: 'actions',Cell: ({value}) => (<button onClick={()=>this.btnClick(value)}>View Details</button>)
        },
        ]
        var res = this.props.data.results && this.props.data.results
        console.log("Length ==========>",res && res.length)
        var res = this.props.data.results && this.props.data.results
        var newdata = [];
        res && res.forEach(element => {
            var data = {
                invoiceno: element.name,
                invoicestatus: element.rotation_period,
                invoiceamount: element.orbital_period,
                invoicepaid: element.gravity,
                po: element.surface_water,
                invoicedate: element.created,
                duedate: element.edited,
                paymentterms: element.climate,
                paymentdate: element.surface_water,
                paymenreference: element.name,
                actions: element.name

            }
            newdata.push(data)
           
        });
        console.log(newdata)
            // for(var i = 0; i <= res; i++) {
            //     var data = [{
            //         invoiceno: res[i].name,
            //         invoicestatus: res[i].rotation_period,
            //         invoiceamount: res[i].orbital_period,
            //         invoicepaid: res[i].gravity,
            //         po: res[i].created,
            //         duedate: res[i].edited,
            //         paymentterms: res[i].climate,
            //         paymentdate: res[i].surface_water,
            //         paymenreference: res[i].name,

            //     }]
            //     console.log(data)
        

            // }

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
                                <ReactTable
                                    defaultPageSize={10}
                                    data={newdata}
                                    columns={columns}
                                />
                                </Segment></Grid.Column></Grid>
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
  )(Reacttable)