function solve(input){
    class Hero{
        
        constructor(name, hp, mp){
            this.name = name;
            this.hp = Number(hp);
            this.mp = Number(mp);
        }
    
        Heal(tokens) {
           
            let hpToAdd = Number(tokens[2]);
            
            
            if(hpToAdd + this.hp > 100){
                hpToAdd= 100 - this.hp;
            }

            this.hp += hpToAdd;

            console.log(`${this.name} healed for ${hpToAdd} HP!`);
        }

        Recharge (tokens) {
            let mpToAdd = Number(tokens[2]);

            if(mpToAdd + this.mp > 200){
                mpToAdd = 200 - this.mp;
            }

            this.mp += mpToAdd;

            console.log(`${this.name} recharged for ${mpToAdd} MP!`);
        }
    
        TakeDamage(tokens) {
            const dmg = Number(tokens[2]);
            const attacker = tokens[3]
            
            this.hp -= dmg;

            if(this.hp > 0){
                console.log(`${this.name} was hit for ${dmg} HP by ${attacker} and now has ${this.hp} HP left!`);
            }else{
                console.log(`${this.name} has been killed by ${attacker}!`);
                delete party[this.name];
            }
        }
    
        CastSpell(tokens) {
            const mpCost = Number(tokens[2]);
            const spelName = tokens[3];
            
            if(this.mp >= mpCost){
                this.mp -= mpCost;
                console.log(`${this.name} has successfully cast ${spelName} and now has ${this.mp} MP!`);
            }else{
                console.log(`${this.name} does not have enough MP to cast ${spelName}!`);
            }
        }
    }

   const n = Number(input.shift());
   const party = {};
   
   for(let i = 0; i < n; i++){
    const [name, hp, mp] = input.shift().split(' ');
    party[name] = new Hero(name, hp, mp);
   }

   while(input[0] !== 'End'){
    const line = input.shift();
    const tokens = (line.split(' - '));
    const [action, name] = tokens;
    const hero = party[name];
    //TODO: pass an argument to the function
    hero[action](tokens);
   }
 
   for (const name in party) { 
        const hero = party[name];
        console.log(name);
        console.log(`  HP: ${hero.hp}`);
        console.log(`  MP: ${hero.mp}`);
    }

  // console.log(party['Solmyr']);
  // console.log(party.Kyrre);
}

solve([
'2',
'Solmyr 85 120',
'Kyrre 99 50',
'Heal - Solmyr - 10',
'Recharge - Solmyr - 50',
'TakeDamage - Kyrre - 66 - Orc',
'CastSpell - Kyrre - 15 - ViewEarth',
'End',
]
)

/*
Solmyr healed for 10 HP!
Solmyr recharged for 50 MP!
Kyrre was hit for 66 HP by Orc and now has 33 HP left!
Kyrre has successfully cast ViewEarth and now has 35 MP!
Solmyr
  HP: 95
  MP: 170
Kyrre
  HP: 33
  MP: 35

*/