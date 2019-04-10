const profile = {name: "Prentice Bess", 
                address: "123 Main Street", 
                city: "Charlotte", 
                state:"North Carolina", 
                zipcode: "28277", 
                avatar: "Baseball"    
        }

        function getprofileUpdate() {
            return ({name: "Lawrence Taylor", avatar: "football"})
         }
         
         function updateProfile(profile2) {
            const newProf = Object.assign({}, profile2, getprofileUpdate());
            console.log(newProf);
         }
         updateProfile(profile);