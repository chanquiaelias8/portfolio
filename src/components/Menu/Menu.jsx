import { Box, Button, Container } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Menu({ navArrayLinks, toggle }) {

    const location = useLocation();

    const sizeBox = () => toggle ? "200px" : "70px";

    return(
        <>
            <Box sx={{
                pl: {
                    xs: 1,
                    sm: 2
                },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignContent: "flex-start",
                height: "75%",
                width: {
                    xs: "70px",
                    sm: sizeBox()
                },
                background: "#2f2f2f",
                borderRadius: 5,
                boxSizing: "initial",
                borderLeft: "5px solid #2f2f2f",
                transition: "width .5s",
                overflowX: "hidden"
            }}>
                {
                    // eslint-disable-next-line react/prop-types
                    navArrayLinks.map(item =>(
                        location.pathname === item.path 
                        ?(<Box
                            key={item.title}
                            sx={{
                                padding: 0,
                                background: "#5f5f5f",
                                position: "relative",
                                width: "100%",
                                borderTopLeftRadius: "20px",
                                borderBottomLeftRadius: "20px"
                            }}
                        >
                            <Container
                                component="b"
                                sx={{
                                    display: "block",
                                    position: "absolute",
                                    top: "-20px",
                                    height: "20px",
                                    background: "#5f5f5f"
                                }}
                            />
                            <Container
                                component="b"
                                sx={{
                                    display: "block",
                                    position: "absolute",
                                    top: "-20px",
                                    height: "20px",
                                    borderBottomRightRadius: "20px",
                                    background: "#2f2f2f"
                                }}
                            />
                            <Box
                                component="b"
                                sx={{
                                    position: "absolute",
                                    bottom: "-20px",
                                    height: "20px",
                                    width: "100%",
                                    background: "#5f5f5f"
                                }}
                                />
                            <Box
                                component="b"
                                sx={{
                                    position: "absolute",
                                    bottom: "-20px",
                                    height: "20px",
                                    width: "100%",
                                    borderTopRightRadius: "20px",
                                    background: "#2f2f2f"
                                }}
                            />
                            <Button
                                component={NavLink}
                                key={item.title}
                                to={item.path}
                                sx={{
                                    width: "100%",
                                    p: 0,
                                    justifyContent: {
                                        xs: "flex-start"
                                    }
                                }}
                            >
                                <Box 
                                    component="span"
                                    sx={{
                                        position: "relative",
                                        display: "block", 
                                        minWidth: "60px", 
                                        height: "60px", 
                                        lineHeight: "70px", 
                                        textAlign: "center"
                                    }}>
                                    {item.icon}
                                </Box>
                                <Box 
                                    componente="span" 
                                    sx={{ 
                                        position: "relative", 
                                        display: "block", 
                                        paddingLeft: "10px", 
                                        height: "60px", 
                                        lineHeight: "60px", 
                                        whiteSpace: "normal"
                                    }}>
                                    {item.title}
                                </Box>
                            </Button>
                        </Box>)
                        :((<Box
                            key={item.title}
                            sx={{
                                padding: 0,
                                position: "relative",
                                width: "100%",
                                borderTopLeftRadius: "20px",
                                borderBottomLeftRadius: "20px"
                            }}
                        >
                        <Button 
                            component={NavLink}
                            key={item.title}
                            to={item.path}
                            sx={{
                                width: "100%",
                                p: 0,
                                justifyContent: {
                                    xs: "flex-start"
                                }
                            }}
                        >
                            <Box 
                                component="span"
                                sx={{
                                    position: "relative",
                                    display: "block", 
                                    minWidth: "60px", 
                                    height: "60px", 
                                    lineHeight: "70px", 
                                    textAlign: "center"
                                }}>
                                {item.icon}
                            </Box>
                            <Box 
                                componente="span" 
                                sx={{ 
                                    position: "relative", 
                                    display: "block", 
                                    paddingLeft: "10px", 
                                    height: "60px", 
                                    lineHeight: "60px", 
                                    whiteSpace: "normal"
                                }}>
                                {item.title}
                            </Box>
                        </Button>
                        </Box>))
                    ))
                }
            </Box>
        </>
    )
}