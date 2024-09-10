function gladiatorInventory(arr){
    let inventory = arr.shift().split(' ');

    for(const command of arr){
        let tokens = command.split(' ');
        const action = tokens.shift();
        const equipment = tokens.shift();

        if(action === 'Buy'){
            if(!inventory.includes(equipment)){
                inventory.push(equipment);
            }
        }else if(action === 'Trash'){
            const equipmentIdx = inventory.indexOf(equipment);

            if(equipmentIdx !== -1){
                inventory.splice(equipmentIdx, 1); //delete
            }
        }else if(action === 'Repair'){
            const equipmentIdx = inventory.indexOf(equipment);

            if(equipmentIdx !== -1){
                inventory.splice(equipmentIdx, 1); //delete
                inventory.push(equipment); //add last position in array
            }
        }else if(action === 'Upgrade'){
            let equipmentTokens = equipment.split('-');
            const oldEquipment = equipmentTokens.shift();
            const upgrade = equipmentTokens.shift();
    
            const oldEquipmentIdx = inventory.indexOf(oldEquipment);
            if(oldEquipmentIdx !== -1){
                inventory.splice(oldEquipmentIdx + 1, 0, `${oldEquipment}:${upgrade}`);
            }
            
        }

    }

    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']
    
    )