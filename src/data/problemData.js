const returnArrayOfObjects = [

    {
       id: 1,
       problemName: "Cant Connect",
       description: "The motion sensor wont connect or communicate with the base station or keypad?",
       solutionList: [
        {
            solutionId: 1,
            solutionName: "Dead Batteries",
            solution: "Batteries in base station might have died"},
        {
            solutionId: 2,
            solutionName: "Faulty Base",
            solution: "Base Station might be faulty. This might be because connection to the base was lost, dead batteries on the base and might need replacement or recharge. Base station might be missing from the system, ensure it is installed -> Attempt resyncing with the base station."},
        {
            solutionId: 3,
            solutionName: "New Base Station",
            solution: "When adding a new base station to replace an old one, please re program all peripherals previously linked to the system."},
        {
            solutionId: 4,
            solutionName: "More than one Base",
            solution: "There can be only one peripheral programmed to Zone 9. If you have more than 1 peripheral programmed to Zone 9, it will confuse the system and various issues such as communication problems will occur. Re program any additional peripherals on Zone 9 onto any other Zone, then be sure to re program all other peripherals to the system."},
        {
            solutionId: 5,
            solutionName: "Check Keypad Solutions",
            solution: "Keypad might be problematic, check keypad solutions for further instructions."},
        {
            solutionId: 6,
            solutionName: "GSM not Communicating",
            solution: "If the GSM is not connecting or communicating, please double check airtime on the GSM Unit. You can also ensure connection status by monitoring the Signal Lights located next to the SIM Slot of the GSM unit. The lights will flash either once, twice or three times every three seconds. 1 Flash being Weak Signal, 2 Flashes being OK signal, but still not quite good enough and 3 Falashes every 3 seconds being great signal. Consider moving the GSM to a different spot to try and gain better signal if the the flashes are less than 3 flashes per every 3 seconds."},
       ]
},
{
      id: 2,
      problemName: "Not Detecting",
      description: "Is the motion sensor not seeing or not seeing as far as you need it to? Unfortunately this one might have to come in for a service. Let's see what we can do...",
      solutionList: [
       {
        solutionId: 1,
        solutionName: "Check Seonsor Lenses",
        solution: "Open the front cover and see if the sensors are clean. If not, clean them with a dry cloth and try them again. In some cases if the beam received shock damage such as after falling or being hit, the sensors might be loose off the PCB Board. In this case they will have to come in for repairs. The Sensors should never be loose. "},
       {
        solutionId: 2,
        solutionName: "Dead Insect Damage",
        solution: "Open the sensor to see any traces of insects, especially ants. After cleaning out the insects as much as possible, try the sensor again -> If still no improvements, please send it in for repairs."},
       {
        solutionId: 3,
        solutionName: "Beam Blockages",
        solution: "See if there is something that might be blocking the range of the sensor. This might be an external object like a wall partly cutting off the beams. Also, considering the bottom sensor shines it's vision downwards over time, means that it will hit the ground over a distance. So if the beam is mounted on a slope, or has a small hill or curb in front of it, it will shorten the vision range of the sensors. "}
      ]
} ,
{
    id: 3,
    problemName: "Sirens Setup and Troubleshooting",
    description: "Are sirens not doing what they are supposed to?",
    solutionList: [
     {
        solutionId: 1,
        solution: "You might need to set up the sirens to actually sound when the sensor detects something, by default it is set to mute. In the app you can change the siren settings of each individual beam by accessing the sensor's settings, scrolling down until you see 'Away Siren Time' or 'Home Siren Time', these are individual settings for each of the two available arming modes, Arm Home and Arm Away. Adjust the settings for the siren to be as long as you need it to sound upon detection, then hit 'Update'."
    },
     {
        solutionId: 2,
        solution: "Open the Sensor, and ensure no insects has entered and possibly damaged the siren. If this seems plausable, your device might have to come in for repairs."},
    ]
} ,
{
    id: 4,
    problemName: "Battery Query",
    description: "Batteries dying too fast?",
    solutionList: [
     {
        solutionId: 1,
        solution: "In the beams, First solution is to always try and use Energizer batteries in the beams. Energizer out of all tested batteries are the only ones who can really keep their fluids inside, especially when exposed to heat. Even other expensive brands such as Duracell will leak battery acid and cause damage to the battery pack. Cheap or no name batteries might not be able to stand the test of time and heat either."
    },
    {
        solutionId: 2,
        solution: "In the beams, Rust might occur on the springs of the battery pack. This calls for many problems and a definate replacement of the battery pack. Luckily this is fixable at a very low cost and small   timeframe. A Battery pack issue can be sorted within a few minutes."},
        {
        solutionId: 3,
        solution: "In the GSM Unit or the KwêHub WiFi unit, the battery issues might be caused by things like the charger not charging the lithium battery, or somethings the battery itself is just faulty. This may call for a battery replacement or internal repair."},
        
        ],
}, 
{
    id: 5,
    problemName: "Not Arming",
    description: "System not Arming?",
    solutionList: [
     {
        solutionId: 1,
        solution: "If trying to arm the system from the Keypad and it is not working, ensure that the base station is the sole proprietor of Zone 9. NO OTHER peripherals can be saved to Zone 9. If there is more than 1 peripheral programmed to Zone 9, choose which you want on Zone 9, and remove the other. Then re program the other to any other zone and re program the entire system to their respective zones to ensure they are communicating with the correct peripheral now on Zone 9."
    },
    {
        solutionId: 2,
        solution: "In some cases, the Battery of Zone 9 might be low or dead, so ensure Zone 9 is still connected and awake for the system to arm properly. Remember, all communication goes through Zone9, whcih then delivers it to the Control Unit -> If Zone 9 is dead or faulty, that is probably the cause."},
        {
        solutionId: 3,
        solution: "Can't Arm From the App? This might be because there is another Peripheral connected to Zone 9, such as a sensor. When using the App, always ensure that only the KwêHub, or if you are using the GSM Unit, only the GSM Unit is registered to Zone 9. Airtime >--> More often than not, if you are using the GSM Unit or the LTE only of the WiFi/LTE KwêHub, you might even think you loaded airtime on it, but always be sure you loaded airtime on it. We have found that from the App, people still think they can load SMS bundles on the GSM Unit to arm and disarm the system from the app, SMS bundles in this case won't do anything, please load Airtime. We also found that people load airtime to the wrong sim, any sim but the one that is in the GSM Unit or KwêHub won't help the Sim in the unit to control the system. Be sure you are loading airtime to the correct SIM."},
        {
        solutionId: 4,
        solution: "If the GSM Unit is not arming or disarming the system, it is always worth it to double check airtime on it. But first and foremost, check the signal lights when opening the GSM Unit. There should be a green light, constantly burning -> This tells us that the GSM Unit is connected to the server and App communication is possible. If the Green light is not constantly burning, App communication will not be pssible because it needs connection to the server. Ensure Airtime and Signal. Then, for signal, double check the orange flashing lights next to the green light. The lights will flash either once, twice or three times every three seconds. 1 Flash being Weak Signal, 2 Flashes being OK signal, but still not quite good enough and 3 Falashes every 3 seconds being great signal. Consider moving the GSM to a different spot to try and gain better signal if the the flashes are less than 3 flashes per every 3 seconds."}
        ],
},
{
    id: 6,
    problemName: "SIM Card Issue",
    description: "Sometimes, SIM Cards can give various problems, causing devices not to connect or communicate properly.",
    solutionList: [
     {
        solutionId: 1,
        solution: "Ensure the SIM card has no password on it. If the SIM card has any login passwords on it, the GSM Unit or KwêHub LTE Unit will NOT know what that passsword is, and ultimately will not be able to unlock the SIM card and will not be able to access it. Put the SIM card into a phone and ensure the password is removed from the SIM card."
    },
    {
        solutionId: 2,
        solution: "Ensure you inserted the SIM Card correctly into the device. The KwêHub LTE Units require a NANO SIM, which is the Smallest form of SIM Cards. And the GSM Unit requires a normal sized SIM card. Besides for the sizes, ensure you insert the SIM card correctly."},
        {
        solutionId: 3,
        solution: "Airtime, SMSes and Data issues. The GSM Unit requires airtime or data to communicate with the app. Sometimes, users will attempt to load SMS bundles, assuming it will work to transmit messages between the GSM Unit and the App, this is wrong. Ensure you use Airtime or Data. We always, in the GSM Unit, recommend Vodacom and Airtime. Airtime won't expire while data expires. On the KwêHub LTE Unit, you should always use a Nano Sim from any network, and ensure either Airtime or Data is loaded -> SMSes won't help with communication. GSM units will can control the system using SMSes. This is an expensive way to deal with KwêBeams, so we highly recommend to upgrade your system to use the App. But SMSes should be able to control the system if using a GSM Unit"},
        {
        solutionId: 4,
        solution: "If the GSM Unit is not arming or disarming the system, it is always worth it to double check airtime on it. But first and foremost, check the signal lights when opening the GSM Unit. There should be a green light, constantly burning -> This tells us that the GSM Unit is connected to the server and App communication is possible. If the Green light is not constantly burning, App communication will not be pssible because it needs connection to the server. Ensure Airtime and Signal. Then, for signal, double check the orange flashing lights next to the green light. The lights will flash either once, twice or three times every three seconds. 1 Flash being Weak Signal, 2 Flashes being OK signal, but still not quite good enough and 3 Falashes every 3 seconds being great signal. Consider moving the GSM to a different spot to try and gain better signal if the the flashes are less than 3 flashes per every 3 seconds."
    }
        ]
}
];

export default returnArrayOfObjects;