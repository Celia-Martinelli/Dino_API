const mainController = {

   async showHomePage (req,res){
    try {
        res.status(200).json();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'an unexpected error occured...'});
    }
   }

};

module.exports = mainController;