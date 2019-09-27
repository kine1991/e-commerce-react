import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    register: {
        width: "500px",
        height: "500px",
        margin : '3rem auto',
        boxShadow: "2px 2px 8px rgba(0,0,0, 0.5)",
    },
    form: {
        padding: "0 3rem",
    },
    button: {
        marginTop: theme.spacing(3),
    },
    title: {
        paddingTop: "1rem",
        textAlign: "center",
        margin: "0",
        // marginTop: "3rem"
    }
})) 