import { Grid } from '@mui/material'
import React from 'react'
import { Container, StyledCard } from './styled'
import { CustomerData, FirstData, TableData } from './data'
import Plot from 'react-plotly.js'
import styles from "./dashboard.module.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Dashboard = () => {
    const CardComponent = ()=>{
        return(
            <>
            <div style={{display:"flex"}}>
                {
                    FirstData?.map((data)=>(
                        <StyledCard>
                            <div style={{backgroundColor:`${data.background}`,opacity:'1',borderRadius:'10px', width:'20%' ,marginLeft:'15px',marginTop:'10px',display:'flex',justifyContent:"center",alignItems:'center'}}>
                                {data.icon}
                            </div>
                            <h3 style={{marginLeft:'15px',color:"white",marginBottom:"0px",marginTop:"12px"}}>{data.name}</h3>
                            <div style={{display:"flex",flexDirection:"row",marginLeft:"15px",marginTop:"0px",padding:'0'}}>
                                <h1 style={{color:"white",margin:'0px',paddingTop:"12px",paddingBottom:"5px"}}>{data.number}</h1>
                                <div style={{display:"flex",paddingTop:'30px',justifyContent:'end',width:"100%",paddingRight:'20px'}}>{data.icon2}<span style={{fontSize:"20px",color:`${data.color1}`,fontWeight:'bold'}}>{data.margin}%</span></div>
                            </div>
                    </StyledCard>
                    ))

                }
               
                
            </div>
                
            </>
        )
    }
    const GraphComponent=()=>{
        return(
            <>
            <div style={{marginBottom:'10px',marginTop:"10px",marginRight:"15px",borderRadius:"3px", backgroundColor:"#2d2d2d"}}>
                <div style={{display:"flex",marginLeft:"15px"}}>
                    <h2 style={{color:"white"}}>Activity</h2>
                    <div style={{display:"flex",justifyContent:"end",width:"100%",marginRight:"15px",marginTop:"15px"}}>
                    <select style={{outline:"none",color:"white",backgroundColor:"#808080",height:"30px",width:"10%",border:"none",borderRadius:"20px"}} >
                        <option value="Weekly" selected>Weekly</option>
                        <option value="Daily">Daily</option>
                        <option value="Quaterly">Quaterly</option>
                    </select>
                    </div>
                </div>
                <div style={{width:"100%",display:"flex",zIndex:"0"}}>
                <Plot
                data={[
                {
                    x:[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],   
                    y:[2,9,12,7,15,2,9,10,15,8,6,9,3,7,1,8,10,13,10,7,4,9,3,7,11,2,6,2,9,2,5,1],
                    type: 'bar',
                 
                },
                
              ]}
              layout={ {
                dragmode:false,
                autosize: true,
                hovermode: 'closest',
                paper_bgcolor: '#2d2d2d',
                plot_bgcolor: '#2d2d2d',
                margin: {
                t: 10,
                b: 50,
                r: 0,
                l: 50,
                pad: 10
                },
                height: 220,
                yaxis: {
                    color: 'white',
                },
                xaxis: {
                    color: 'white',
                },
                barcornerradius: 20,

            
            } }
            style={{
                width: "98%",
                fontFamily: "Helvetica Neue"
              }}
            config={{
                displayModeBar: false,
                responsive: true,
              }}
            />  
            </div>
            </div>
            </>
      
        )
    }
    const TableComponent =()=>{
        return (
            <>
               <div style={{marginTop:"10px",marginRight:"15px",borderRadius:"3px", backgroundColor:"#2d2d2d"}}>
               <div style={{marginLeft:"15px",marginRight:"10px"}}>
               <h2 style={{color:"white"}}>Recent Orders</h2>
               <div className={styles.tableContainer}>
               <table className={styles.table}>
                <tr>
                <th>Customer</th>
                <th>Order No</th>
                <th>Amount</th>
                <th>Status</th>
                </tr>
                {
                    TableData?.map((data)=>(
                        <tr>
                            <td >
                            <img src={data.img} alt="img" className={styles.customerImg}/>
                              {data.customer}  
                            </td>
                            <td>
                              {data.order}  
                            </td>
                            <td>
                              {data.amount}  
                            </td>
                            <td >
                                <span className={styles[`status${data.status}`]}>{data.status}  
                                </span>

                            </td>
                        </tr>
                    ))
                }
               </table>
               </div>
               
               </div>

                </div>
            </>
        )
    }
    const NetProfit =()=>{
        return(
            <StyledCard className="netcard">
                <div style={{display:"flex",marginLeft:"15px",marginTop:"15px"}}>
                    <div style={{width:"50%"}}>
                        <h4 style={{margin:"0",padding:"0",color:"#fff"}}>Net Profit</h4>
                        <div style={{color:"#fff",fontSize:"30px",fontWeight:"bold",marginTop:"16px",marginBottom:"10px"}}>$ 6759.25</div>
                        <div style={{display:"flex",verticalAlign:"middle",color:"#008000"}}><KeyboardArrowUpIcon/><span style={{fontSize:"20px",fontWeight:"bold"}}>3%</span> </div>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
                       <div style={{display:"flex",alignItems:"end",justifyContent:"end",marginRight:"25px"}}>
                       <Plot
                       data={[
                        {
                          values: [70,30,],
                          hole: 0.7,
                          type: 'pie',
                          textinfo: 'none',
            
                          marker: {
                            colors: ["#3F00FF",'#7DF9FF']
                          },
                          hoverinfo: 'none',
                        },
                      ]}
                      layout={{
                        height:100,
                        width:100,
                        paper_bgcolor: '#2d2d2d',
                        plot_bgcolor: '#2d2d2d',
                        showlegend:false,
                        autosize: false,
                        padding:
                        {
                        t: 0, b: 0,
                        r: 10,
                        l: 0,
                        },
                        margin: {
                        t: 0,
                        b: 0,
                        r: 0,
                        l: 0,
                        },
                        annotations: [
                            {
                              showarrow: false,
                              text: "<b>70%</b><br\>Goal<br\>Completed",
                              align: 'center',
                              font: {
                                size: 10,
                                color:"#fff"
              
                              },
                              showlegend: false,
                            },
                          ],

                      }}
                      config={{
                        displayModeBar: false,
                        responsive: true,
                      }}
                    />
                    </div>
                    <div style={{display:"flex",alignItems:"end",justifyContent:"end",marginRight:"30px",margin:"0px",color:"#fff",fontSize:"10px",marginBottom:"5px",marginTop:"5px"}}>
                        *The values here has been rounded off.
                    </div>
                    </div>

                </div>
            </StyledCard>
        )
    }

    const Goals=()=>{
        return (
            <StyledCard className="goals">
                <div style={{width:"100%",marginLeft:"40px"}}>
                    <div style={{width:"100%",display:"flex",marginTop:"15px",marginBottom:"15px"}}>
                        <div style={{width:"60%",display:"flex"}}>
                        <div style={{borderRadius:"50%",backgroundColor:"#FA5F55",height:"75px",width:"75px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <TaskAltIcon style={{width:"50",height:"50",color:"#fff"}}/>
                        </div>
                        <div style={{color:"#fff",fontSize:"20px",marginLeft:"15px",textAlign:"center",display: "flex",alignItems:"center"}}>Goals</div>
                        </div>
                        <div style={{width:"30%",display:"flex",justifyContent:"flex-end",paddingTop:"20px",paddingRight:"15%"}}>
                        <div style={{width:"30px",height:"30px",borderRadius:"50%",backgroundColor:"#fff",display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <ArrowForwardIosIcon/>
                        </div>
                        </div>
                    </div>
                    <div style={{width:"100%",display:"flex",marginTop:"17px",marginBottom:"15px"}}>
                        <div style={{width:"60%",display:"flex"}}>
                        <div style={{borderRadius:"50%",backgroundColor:"lightblue",height:"75px",width:"75px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <LunchDiningIcon style={{width:"50",height:"50",color:"#fff"}}/>
                        </div>
                        <div style={{color:"#fff",fontSize:"20px",marginLeft:"15px",textAlign:"center",display: "flex",alignItems:"center"}}>Popular Dishes</div>
                        </div>
                        <div style={{width:"30%",display:"flex",justifyContent:"flex-end",paddingTop:"20px",paddingRight:"15%"}}>
                        <div style={{width:"30px",height:"30px",borderRadius:"50%",backgroundColor:"#fff",display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <ArrowForwardIosIcon/>
                        </div>
                        </div>
                    </div>
                    <div style={{width:"100%",display:"flex",marginTop:"15px",marginBottom:"15px"}}>
                        <div style={{width:"60%",display:"flex"}}>
                        <div style={{borderRadius:"50%",backgroundColor:"lightgreen",height:"75px",width:"75px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <MenuBookIcon style={{width:"50",height:"50",color:"#fff"}}/>
                        </div>
                        <div style={{color:"#fff",fontSize:"20px",marginLeft:"15px",textAlign:"center",display: "flex",alignItems:"center"}}>Menus</div>
                        </div>
                        <div style={{width:"30%",display:"flex",justifyContent:"flex-end",paddingTop:"20px",paddingRight:"15%"}}>
                        <div style={{width:"30px",height:"30px",borderRadius:"50%",backgroundColor:"#fff",display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <ArrowForwardIosIcon/>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </StyledCard>
        )
    }
    const CustomerReview=()=>{
        return (
            <>
                <StyledCard className='review'>
                   <div style={{marginLeft:"15px",marginRight:"15px",marginTop:"15px"}}>
                   <h2 style={{color:"white"}}>Customer's Feedback</h2>
                    {CustomerData.map((data)=>(

                   
                        <div style={{display:"flex",flexDirection:"column",marginBottom:"15px",borderBottom:"1px solid  #ffffff4d"}}>
                            <div style={{display:"flex",verticalAlign:"middle"}}>
                                <img src={data.img} alt="img" className={styles.customerImg}/>
                                <span style={{color:"#fff",marginLeft:"5px"}}>
                                    {data.name}
                                </span>
                                
                            </div>
                            <img src={data.star} alt="star" height="50px" width="100px"/>
                            <div style={{paddingTop:"10px",paddingBottom:"10px",color:"#ffffff4d"}}>
                                    {data.review}
                            </div>

                        </div>
                     ))}
                   </div>
                </StyledCard>
            </>
        )
    }

  return (
    <>
    <div style={{paddingTop:"85px",paddingLeft:"75px"}}>
        <h2 style={{color:"white"}}>Dashboard</h2>
        
        <Container container>
            <Grid item lg={8} md={12} xs={12} sx={{marginBottom:"15px"}}>
                <div style={{display:"flex",flexDirection:"column"}}>
                   <CardComponent/>
                   <GraphComponent/>
                    <TableComponent/>
                </div>
            </Grid>
            <Grid item lg={4} md={12} xs={12} >
            <div style={{display:"flex" ,flexDirection:"column"}}>
                    <NetProfit/> 
                     <Goals/>
                    <CustomerReview/>
                </div>
            </Grid>
        </Container>
    </div>
        
    </>
  )
}

export default Dashboard
