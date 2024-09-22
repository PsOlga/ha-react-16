import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@mui/material";
import { useState } from "react";
import styles from "./styles.module.css"

function Home () {

const [isOpen, setIsOpen] = useState(false);

const hendleOpen = () => {
    setIsOpen(true);
};
const handleClose = () => {
    setIsOpen(false);
};


    return <div className={styles.containerHome}>
    <AppBar position="static"> 
     <Toolbar>
        <Typography variant="h6">Material UI</Typography> 
     </Toolbar>
     </AppBar>

    <Container className={styles.basicInform}>
        <Typography variant="h5"
        className={styles.welcome}
        >Добро пожаловать в наше приложение </Typography>
        <Button 
        onClick={hendleOpen}
        variant="contained"
        >
            Открыть диалоговое окно
        </Button>
    </Container>

    <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>
            Использовать Material UI?
        </DialogTitle>
        <DialogContent className={styles.dialogContent
        }>
            <DialogContentText 
            id="alert-dialog-slide-description">
                Это проект Реакт для обучения пользования библиотекой Material UI
                </DialogContentText>  
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Отмена</Button>
            <Button onClick={handleClose}>Согласен</Button>
        </DialogActions>
    </Dialog>
    </div>
}

export default Home;