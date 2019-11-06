import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

export const useStyles = makeStyles(theme => ({
    navbar: {
        backgroundColor: theme.navbar,
        color: props =>  false ? grey[900]: grey[100],
    },
    title: {
        flexGrow: 1
    },
    list: {
        width: "250px",
    },
    link: {
        textDecoration: "none",
        color: "inherit",
        padding: "0 1rem"
    },
}))