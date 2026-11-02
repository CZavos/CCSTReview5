/*
  Quiz 5: Cisco CCST Networking
  Edit this file to change questions, answers, or explanations.

  Question types:
    single      options[], answer = index of the correct option
    multi       options[], pick = how many to choose, answer = [indexes]
    yesno       rows[{ text, answer: true|false }]
    match       terms[], pairs[{ definition, answer: "term text" }]
    dropdown    items[{ label, options[], answer: "option text" }]
    cloze       parts[] (text around the blanks), blanks[{ options[], answer }]
    categorize  categories[], items[{ text, answer: "category" }]
  Optional on any question: code = terminal-style block,
                            image = { src, alt }.
*/
const QUIZ = {
  title: "Quiz 5",
  subtitle: "Cisco CCST networking practice",
  questions: [
    // 1
    {
      type: "dropdown",
      prompt: "Using the dropdown lists, answer the following questions regarding help desk concepts.",
      items: [
        {
          label: "Which type of document defines the acceptable response time for help desk tickets?",
          options: ["SLA", "MOU", "BCP", "DRP"],
          answer: "SLA"
        },
        {
          label: "What is one statistic a KPI will show in a help desk report?",
          options: [
            "Number of devices in overall inventory",
            "Average time for a call response",
            "Number of devices on a network",
            "Number of mobile devices on a network"
          ],
          answer: "Average time for a call response"
        }
      ],
      explanation: [
        "A service level agreement (SLA) defines the acceptable response time for help desk tickets.",
        "A memorandum of understanding (MOU) is a non-binding agreement between two entities for business purposes.",
        "A business continuity plan (BCP) defines how a business will stay up and running in case of disaster.",
        "A disaster recovery plan (DRP) defines how a business recovers from a disaster to get back up and running.",
        "Key Performance Indicators (KPIs) show how well help desk staff respond to calls, how satisfied customers are, and other statistics regarding call resolutions and the timing of those resolutions. KPIs do not show non-performance-based stats, such as inventory amounts or the number of mobile devices on a network."
      ]
    },
    // 2
    {
      type: "single",
      prompt: "A help desk agent reset an IP address on a laptop that moved to a new network and could not connect to it. Choose the phrase that best fits the closing portion of the ticket.",
      options: [
        "The device cannot join the network.",
        "The IP address is in the device’s old network subnet. Ran the ipconfig /renew command.",
        "Closed.",
        "Executed the ipconfig /renew command on the device to get the device a new IP address. Resolved."
      ],
      answer: 3,
      explanation: [
        "A closing portion of a ticket should list what has been done to resolve the problem, not just say “closed.” Thus, describing the process of resetting the IP address is appropriate for the closing portion of the ticket.",
        "The problem and its description belong in those respective fields in a help desk ticket, not the closing portion of the ticket."
      ]
    },
    // 3
    {
      type: "single",
      prompt: "Upon receiving a ticket that an employee cannot print anything, a support person has verified that print jobs are not going to the printer and that the employee is trying to print to multiple printers. What should the support agent do next?",
      options: [
        "Escalate the call.",
        "Devise a plan to get the print jobs printing.",
        "Implement a plan to get the print jobs printing.",
        "Consider the probable cause for the print jobs not printing."
      ],
      answer: 3,
      explanation: [
        "The support agent should consider the probable cause for the print jobs not printing.",
        "Without a cause, the agent cannot conceivably devise a plan to solve the problem, nor implement that plan.",
        "The support agent would not need to escalate the call unless the agent knows what the cause of the problem is and cannot solve it."
      ]
    },
    // 4
    {
      type: "cloze",
      prompt: "Using the dropdown lists, finish each safety statement for when working on hardware in the workplace.",
      parts: [
        "To avoid electrical shock, one should never work on the inside of a ",
        ". A Class ",
        " fire extinguisher should be on hand for electrical equipment fires."
      ],
      blanks: [
        { options: ["power supply", "laptop", "printer"], answer: "power supply" },
        { options: ["C", "B", "A"], answer: "C" }
      ],
      explanation: [
        "To avoid electrical shock, one should never work on the inside of a power supply.",
        "A Class C fire extinguisher should be on hand for electrical equipment fires."
      ]
    },
    // 5
    {
      type: "yesno",
      prompt: "For each statement regarding what the ipconfig command displays on a device, indicate Yes if the statement is true, and No if the statement is false.",
      rows: [
        { text: "The ipconfig command displays IPv4 information.", answer: true },
        { text: "The ipconfig /all command displays IPv6 information.", answer: true },
        { text: "The ipconfig command displays MAC address information.", answer: false }
      ],
      explanation: [
        "True statements:",
        "The ipconfig command displays IPv4 information.",
        "The ipconfig /all command displays IPv6 information.",
        "False statements:",
        "The ipconfig command displays MAC address information.",
        "Explanation:",
        "The ipconfig /all command is needed to display MAC address information on a device."
      ]
    },
    // 6
    {
      type: "match",
      prompt: "Using drag and drop, match each macOS tool with a situation in which the tool is used.",
      terms: ["About This Mac", "System Settings", "ifconfig", "Activity Monitor", "Console"],
      pairs: [
        { definition: "Used to end an app when it will not close otherwise.", answer: "Activity Monitor" },
        { definition: "Displays the OS version running on a Mac.", answer: "About This Mac" },
        { definition: "Used to view log messages about an app crash.", answer: "Console" },
        { definition: "Displays IP address information for a network adapter.", answer: "ifconfig" },
        { definition: "Used to enable accessibility features on a device.", answer: "System Settings" }
      ],
      explanation: [
        "Activity Monitor is used to view and end running processes, such as when Force Quit does not end a process.",
        "About This Mac displays the macOS version running on a device.",
        "Console is used to view and monitor log messages on macOS, such as information generated when an app crashes.",
        "ifconfig is used to display IP address information on a Mac.",
        "System Settings manages hardware settings, operating system settings, user accounts, and updates. One example is accessibility settings, which help those who need assistance on a computer."
      ]
    },
    // 7
    {
      type: "single",
      prompt: "Which port transmits data one bit at a time?",
      options: ["Parallel", "Serial", "USB-A", "USB-C"],
      answer: 1,
      explanation: [
        "A serial port transmits data one bit at a time. Thus, it is considered to be very old and slow by today’s standards and is rarely available as a port on a device.",
        "Parallel ports transmit a byte of data (eight bits) at a time.",
        "USB ports can transmit data up to 40 Gbps."
      ]
    },
    // 8
    {
      type: "yesno",
      prompt: "For each statement regarding Thunderbolt and USB-C cables, indicate Yes if the statement is true, and No if the statement is false.",
      rows: [
        { text: "Thunderbolt 4 is backward compatible with Thunderbolt 3.", answer: true },
        { text: "Thunderbolt and USB-C use the same connector.", answer: true },
        { text: "USB-C is faster than Thunderbolt 3 when plugged into a Thunderbolt port.", answer: false }
      ],
      explanation: [
        "True Statements:",
        "Thunderbolt 4 is backward compatible with Thunderbolt 3.",
        "Thunderbolt and USB-C use the same connector.",
        "False Statements:",
        "USB-C is faster than Thunderbolt 3 when plugged into a Thunderbolt port.",
        "Explanation:",
        "USB-C is slower than Thunderbolt 3 when plugged into a Thunderbolt port."
      ]
    },
    // 9
    {
      type: "multi",
      pick: 2,
      prompt: "An employee calls the help desk claiming nothing happens when pressing keys on their computer’s keyboard. What are the first steps toward troubleshooting this issue? (Choose two)",
      options: [
        "Move the mouse.",
        "Replace the keyboard.",
        "Make sure the computer is turned on.",
        "Make sure the computer is plugged in and everything is connected.",
        "Reboot the device."
      ],
      answer: [2, 3],
      explanation: [
        "If a computer is not responding, a technician should determine if the computer is plugged in, powered on, and everything is connected.",
        "Replacing the keyboard or rebooting the device is unlikely to solve the problem, especially if the computer is not even powered on.",
        "Moving the mouse will only get a response if the device’s monitor is waking up from sleep mode."
      ]
    },
    // 10
    {
      type: "single",
      prompt: "An employee plugs a USB drive into a device, but the device does not read the drive. You access Device Manager and next to the device see a circle with a black arrow pointing downward. What does this indicate with regard to the USB drive?",
      options: [
        "There is more information to see on the device.",
        "The device is not enabled.",
        "The device needs a device-specific driver.",
        "The device has an issue."
      ],
      answer: 1,
      explanation: [
        "In Device Manager, a black arrow inside a circle next to a device indicates the device is not enabled.",
        "A yellow triangle with an exclamation point indicates a problem with the device itself.",
        "A question mark next to the device indicates that a driver is being used for the device, but the driver is not specific to that device.",
        "The information icon (blue letter i in a circle) represents information about a device, but not a problem. This icon is not present in Device Manager."
      ]
    },
    // 11
    {
      type: "yesno",
      prompt: "To improve overall security, a business has decided to implement multifactor authentication. For each sign-in combination, indicate Yes if the combination uses multifactor authentication and No if it does not.",
      rows: [
        { text: "Username and a code in an authenticator app", answer: true },
        { text: "Username and a one-time password sent to the person’s phone", answer: true },
        { text: "Username and password", answer: false },
        { text: "Authenticator app and a one-time password sent to the person’s phone", answer: false }
      ],
      explanation: [
        "True statements:",
        "Username and a code in an authenticator app",
        "Username and a one-time password sent to the person’s phone",
        "False statements:",
        "Username and password",
        "Authenticator app and a one-time password sent to the person’s phone",
        "Explanation:",
        "Username and password both use the What You Know authentication factors.",
        "Authenticator app and a one-time password are both What You Have authentication factors."
      ]
    },
    // 12
    {
      type: "single",
      prompt: "A new project manager is not receiving emails other project managers do regarding projects. To correct this, the project manager must be added to a group called Project Managers. What group type would this be?",
      options: ["Organizational unit", "Active Directory group", "Distribution group", "Security group"],
      answer: 2,
      explanation: [
        "A distribution group is used for group emails.",
        "A security group is used to control permissions on resources. The same holds for an Active Directory group.",
        "An organizational unit is used to control what people can do via Group Policy."
      ]
    },
    // 13
    {
      type: "single",
      prompt: "A customer reports that an external drive is not being recognized when plugged into a Windows PC. What should a technician do first to solve the problem?",
      options: [
        "Check Device Manager for possible issues.",
        "Format the drive.",
        "Ensure the drive has power.",
        "Check Disk Management for the presence of the drive."
      ],
      answer: 2,
      explanation: [
        "The technician should verify the drive is powered, as some external drives require AC power while others get power from the USB port.",
        "After that issue is ruled out, a technician can check Device Manager and Disk Management to see if the drive is recognized.",
        "Formatting a drive is not an option if the drive is not recognized."
      ]
    },
    // 14
    {
      type: "multi",
      pick: 2,
      prompt: "A manager is setting up to do a presentation in a board room and experiences intermittent connectivity with the Bluetooth keyboard and mouse. What does a technician need to check first for causes of intermittent connections? (Choose two)",
      options: [
        "Check the room’s Wi-Fi signal strength.",
        "Check to see if the devices are paired properly.",
        "Check the distance between the keyboard and mouse and the device they are connected to.",
        "Check the battery strength on the keyboard and mouse."
      ],
      answer: [2, 3],
      explanation: [
        "A Bluetooth pairing typically has a range of 30 feet. Thus, that can be a factor for connectivity, especially in a boardroom.",
        "A weak battery will also cause a signal to lose distance.",
        "Bluetooth does not use Wi-Fi connections, so those are not a factor.",
        "If the devices are not paired, there will be no connectivity."
      ]
    },
    // 15
    {
      type: "single",
      prompt: "A new company policy requires all drives must be encrypted using BitLocker. The recovery key needs to be digitally recoverable should it be needed in case of a massive data outage. How should the recovery key be stored?",
      options: [
        "On an External hard drive.",
        "On a local hard drive.",
        "In the Azure AD account.",
        "It should be printed."
      ],
      answer: 2,
      explanation: [
        "A recovery key can be stored in one of three ways: to an Azure Active Directory (AD) account, a file (local or network), or printed.",
        "A key is recoverable via Azure Active Directory even if there is a major data outage within a company, as the key is stored in the cloud.",
        "Recovery keys stored on local drives, whether internal or external, could be lost in a data outage.",
        "Printing a recovery key does not store it digitally."
      ]
    },
    // 16
    {
      type: "single",
      prompt: "The networking team is installing a new WebEx Desk Pro screen in a conference room. Which type of network connection would be best?",
      options: ["Bluetooth", "Wireless", "Ad hoc", "Wired"],
      answer: 3,
      explanation: [
        "A wired connection is best suited for the WebEx Desk Pro screen as signal strength or distance is not an issue.",
        "Wireless connections can vary in signal strength.",
        "Bluetooth connections are usually limited to 30 feet, which may be too short for a conference room.",
        "Ad hoc connections are also wireless and have the same problems as standard wireless connections."
      ]
    },
    // 17
    {
      type: "yesno",
      prompt: "For each statement regarding DHCP and APIPA, indicate Yes if the statement is true and No if the statement is false.",
      rows: [
        { text: "DHCP assigns IP addresses from a pool to devices joining a network.", answer: true },
        { text: "APIPA is used to give devices an IP address when they cannot get an address from a DHCP server.", answer: true },
        { text: "APIPA IP addresses are in the 169.254.x.x range.", answer: true }
      ],
      explanation: [
        "True statements:",
        "DHCP assigns IP addresses from a pool to devices joining a network.",
        "APIPA is used to give devices an IP address when they cannot get an address from a DHCP server.",
        "APIPA IP addresses are in the 169.254.x.x range.",
        "False statements: None"
      ]
    },
    // 18
    {
      type: "single",
      prompt: "An employee claims that on some websites, the web browser needs to be refreshed before the most recent data is seen. What should a technician do to eradicate the issue?",
      options: [
        "Clear the browser’s cache.",
        "Use a different browser.",
        "Restart the device.",
        "Reinstall the browser."
      ],
      answer: 0,
      explanation: [
        "When a browser is not showing the most recent information from a website, all or part of the website is stuck in the browser’s cache. Clearing the cache will reset the browser to show the most recent data from the site.",
        "Using a different browser is not ideal as the employee may not want to use a different browser and other browsers could have the same cache issue.",
        "Reinstalling the browser will not always solve the problem as often a person’s existing settings, including the cache, are kept.",
        "Restarting the device does not empty a browser cache."
      ]
    },
    // 19
    {
      type: "categorize",
      prompt: "A new technician is learning the difference between public and private IP addresses. To help the new technician, categorize each IP address as either public or private.",
      categories: ["Public", "Private"],
      items: [
        { text: "10.10.10.10", answer: "Private" },
        { text: "172.32.0.1", answer: "Public" },
        { text: "192.168.1.1", answer: "Private" },
        { text: "209.99.99.99", answer: "Public" },
        { text: "1.1.1.1", answer: "Public" },
        { text: "172.20.20.20", answer: "Private" }
      ],
      explanation: [
        "Private IP addresses are in one of three ranges: any IP address starting with 10, any IP address from 172.16.0.0 to 172.31.255.255, and any IP address starting with 192.168. Thus, the IP addresses in this question are categorized as follows:",
        "Public:",
        "1.1.1.1",
        "172.32.0.1",
        "209.99.99.99",
        "Private:",
        "10.10.10.10",
        "172.20.20.20",
        "192.168.1.1"
      ]
    },
    // 20
    {
      type: "yesno",
      prompt: "For each statement regarding the ping command, indicate Yes if the statement is true and No if the statement is false.",
      rows: [
        { text: "ping tests the ability of one device to connect to another device.", answer: true },
        { text: "ping6 pings IPv6 addresses on Linux devices.", answer: true },
        { text: "ping6 pings IPv6 addresses on Windows devices.", answer: false }
      ],
      explanation: [
        "True statements:",
        "ping tests the ability of one device to connect to another device.",
        "ping6 pings IPv6 addresses on Linux devices.",
        "False statements:",
        "ping6 pings IPv6 addresses on Windows devices.",
        "Explanation:",
        "ping -6 pings IPv6 addresses on Windows devices."
      ]
    },
    // 21
    {
      type: "single",
      prompt: "You need to add a route to a Linux route table. It is the 10.1.1.0/24 network to route traffic through the 10.1.1.1 default gateway. 10.1.1.1 is not yet set as the default gateway. Which command will successfully add 10.1.1.1 as the default gateway?",
      options: [
        "sudo ip route add 10.1.1.0/24 via 10.1.1.1",
        "sudo ip route2 add 10.1.1.0/24 via 10.1.1.1",
        "sudo ip route add default via 10.1.1.1",
        "sudo ip route2 add default via 10.1.1.1"
      ],
      answer: 2,
      explanation: [
        "The correct command for adding the router at 10.1.1.1 as the default gateway is: sudo ip route add default via 10.1.1.1.",
        "iproute2 is a utility, not a command. Thus, any command using iproute2 is incorrect.",
        "Adding a route will not automatically set a router to be a default gateway. Thus, the sudo ip route add 10.1.1.0/24 via 10.1.1.1 is valid but the command adds a route, not a default gateway."
      ]
    },
    // 22
    {
      type: "match",
      prompt: "Using drag and drop, arrange in order, the steps in the boot sequence on a Windows device.",
      terms: ["POST", "Boot loader", "Windows kernel loading", "Session manager"],
      pairs: [
        { definition: "Step 1", answer: "POST" },
        { definition: "Step 2", answer: "Boot loader" },
        { definition: "Step 3", answer: "Windows kernel loading" },
        { definition: "Step 4", answer: "Session manager" }
      ],
      explanation: [
        "The steps for the boot sequence on a Windows device happen in this order:",
        "1. Power On Self Test (POST), which uses the BIOS or UEFI to verify the hardware on a device.",
        "2. Boot loader, which looks for a bootable drive.",
        "3. Windows kernel loading, which loads system components, files, and device drivers.",
        "4. Session manager, which displays the sign-in screen for Windows."
      ]
    },
    // 23
    {
      type: "multi",
      pick: 2,
      prompt: "In macOS, in the Energy Saver area, which features are configurable for putting a device in sleep state? (Choose two)",
      options: ["Screen", "Display sleep", "Sleep", "Computer sleep"],
      answer: [1, 3],
      explanation: [
        "Within the Energy Saver area on a Mac, Computer sleep and Display sleep are configurable settings.",
        "Screen and Sleep are configurable settings on a Windows device."
      ]
    },
    // 24
    {
      type: "yesno",
      prompt: "For each statement on displays in macOS-based systems, indicate Yes if the statement is true and No if the statement is false.",
      rows: [
        { text: "An HiDPI setting mimics a different screen resolution.", answer: true },
        { text: "Brightness on a Macbook display can be adjusted under System Settings.", answer: true },
        { text: "Additional displays can either extend or mirror the original display.", answer: true },
        { text: "The Detect Displays option is present by default in the Displays window on a Mac.", answer: false }
      ],
      explanation: [
        "True statements:",
        "An HiDPI setting mimics a different screen resolution.",
        "Brightness on a Macbook display can be adjusted under System Settings.",
        "Additional displays can either extend or mirror the original display.",
        "False statements:",
        "The Detect Displays option is present by default in the Displays window on a Mac.",
        "Explanation:",
        "While in the Displays window, one has to hold down the Option key to see the Detect Displays option (instead of the Night Shift option)."
      ]
    },
    // 25
    {
      type: "single",
      prompt: "A caller to the help desk claims that no network connectivity is available on their phone and that the Bluetooth headphones connection also fails. What should a help desk agent check for first to troubleshoot this problem?",
      options: [
        "Check to see if the Bluetooth setting is off.",
        "Reboot the device.",
        "Check to see if the device is set to Airplane Mode.",
        "Check to see if the cellular setting is off."
      ],
      answer: 2,
      explanation: [
        "When a person is claiming a mobile device has no network connectivity, a help desk agent should first check to see if the device is set to Airplane Mode, as a device in Airplane Mode will lose most or all of its network connectivity.",
        "Checking to see if a cellular setting is off does not explain why a Bluetooth connection is not working.",
        "Checking the device’s Bluetooth setting is not the first step to take because the person is claiming that other network connectivity is also lost.",
        "Rebooting the device will not restore network connectivity if the device is in Airplane Mode."
      ]
    },
    // 26
    {
      type: "single",
      prompt: "Which backup method is the default on a Mac and does not require an external drive for this service?",
      options: ["iCloud", "Time Machine", "Dropbox", "iTunes"],
      answer: 0,
      explanation: [
        "iCloud is a Mac backup method that backs up data directly to the cloud, thus an external drive is not required.",
        "Time Machine requires an external drive or network drive to back up data.",
        "iTunes is a media library, not a backup library.",
        "Apple does not contract with third-party vendors, such as Dropbox, to have them serve as a default backup method for macOS-based devices."
      ]
    },
    // 27
    {
      type: "single",
      prompt: "An employee is working remotely and needs to attend an online meeting using Teams. The employee calls the help desk in a panic stating they cannot hear anything in the meeting even though the employee can communicate fine with a help desk technician. What should the help desk technician do first to attempt to solve the problem?",
      options: [
        "Reinstall the collaboration app.",
        "Have the employee leave the meeting and return to it.",
        "Ensure the app’s sound setting is not disabled.",
        "Check the device volume setting."
      ],
      answer: 2,
      explanation: [
        "In any collaboration app, when faced with someone who has no sound within a meeting, a support person should check to make sure the app’s sound setting is not disabled.",
        "The device volume is not a factor. If it were, the employee would not be able to hear the help desk agent.",
        "Leaving and returning to the meeting will not work if the in-app sound setting is off.",
        "Reinstalling the app might work, but it should not be the first step taken to troubleshoot this issue."
      ]
    },
    // 28
    {
      type: "yesno",
      prompt: "For each statement regarding Windows Updates, indicate Yes if the statement is true and No if the statement is false.",
      rows: [
        { text: "Updates can be paused to resume up to five weeks later.", answer: true },
        { text: "One can control the hour window in which updates take place.", answer: true },
        { text: "Updates cannot be uninstalled.", answer: false }
      ],
      explanation: [
        "True statements:",
        "Updates can be paused to resume up to five weeks later.",
        "One can control the hour window in which updates take place.",
        "False statements:",
        "Updates cannot be uninstalled.",
        "Explanation:",
        "Some updates done with Windows Updates can be uninstalled."
      ]
    },
    // 29
    {
      type: "yesno",
      prompt: "For each statement regarding TeamViewer as a remote access tool, indicate Yes if the statement is true and No if the statement is false.",
      rows: [
        { text: "TeamViewer can remotely control another device.", answer: true },
        { text: "TeamViewer can control a device that’s not connected to the internet.", answer: false },
        { text: "TeamViewer can directly control network settings within an organization.", answer: false }
      ],
      explanation: [
        "True statements:",
        "TeamViewer can remotely control another device.",
        "False statements:",
        "TeamViewer can control a device that’s not connected to the internet.",
        "TeamViewer can directly control network settings within an organization.",
        "Explanation:",
        "TeamViewer uses remote servers to connect to devices, so it cannot connect to a device not connected to the internet.",
        "TeamViewer cannot directly control network settings within an organization. It needs to connect to a resource that can do those tasks, such as a network server."
      ]
    },
    // 30
    {
      type: "single",
      prompt: "A help desk agent needs to access an employee’s computer to show them how to build PivotTables in Excel. Which Microsoft software could the agent use to conduct the remote session?",
      options: ["Remote Desktop", "Remote Assistance", "TeamViewer", "VNC"],
      answer: 1,
      explanation: [
        "Remote Assistance is a Microsoft tool that allows one to take over someone else’s system, with the recipient being able to see what the person who has taken over the system is doing.",
        "Remote Desktop is a Microsoft tool that allows one to take over someone else’s system, but does not allow the recipient to see what is going on.",
        "TeamViewer allows for remote assistance that can be seen, but is not a Microsoft tool.",
        "Virtual Network Computing (VNC) is not a Microsoft tool."
      ]
    },
    // 31
    {
      type: "match",
      prompt: "Using drag and drop, match each activity with its role in allowing mobile devices to get apps from outside of their respective app stores.",
      terms: ["Jailbreaking", "Rooting", "Sideloading"],
      pairs: [
        { definition: "Allows iOS devices to install apps from outside the App Store.", answer: "Jailbreaking" },
        { definition: "The act of installing apps on Android devices from outside the Play Store.", answer: "Sideloading" },
        { definition: "Allows Android users to take full control of their devices.", answer: "Rooting" }
      ],
      explanation: [
        "Jailbreaking removes software restrictions from iOS devices, allowing them to install apps not available on the App Store.",
        "Sideloading is the act of installing apps on Android devices from outside the Play Store.",
        "Rooting allows Android users to take full control of their devices, including bloatware removal and system changes."
      ]
    },
    // 32
    {
      type: "single",
      prompt: "An employee calls the help desk suspecting their device has a virus. What is the first step a help desk agent should take to address a potential virus?",
      options: [
        "Check for the latest virus definition files.",
        "Isolate the device from the network.",
        "Run a system file check on the device.",
        "Reboot the device."
      ],
      answer: 1,
      explanation: [
        "The first step any time a virus is suspected is to isolate the device from the network, so that if one exists its spread is minimized.",
        "Checking for the latest virus definition files should be done regularly so that they are current when a virus is suspected.",
        "Rebooting a device will not eradicate a virus.",
        "Running a system file check is only applicable if there is suspicion of Windows system files becoming corrupted."
      ]
    },
    // 33
    {
      type: "categorize",
      prompt: "Classify each attempt of social engineering as either a phishing attempt or an impersonation attempt.",
      categories: ["Phishing", "Impersonation"],
      items: [
        { text: "A person acting like a help desk agent and tries to get users to disclose personal information.", answer: "Impersonation" },
        { text: "A text message attempting to get money to help someone travel to collect lottery winnings.", answer: "Phishing" },
        { text: "A person acting like a supervisor and trying to get people’s information by calling the help desk.", answer: "Impersonation" },
        { text: "An email attempting someone to connect to a legitimate-looking bank sign-in page.", answer: "Phishing" }
      ],
      explanation: [
        "Phishing attempts include attempts to solicit information via email or text messaging, also known as smishing.",
        "Impersonation attempts include someone acting like a help desk agent trying to get username and password information from a user.",
        "Another example of impersonation is someone acting like a supervisor calling a help desk agent to try to get unauthorized access to people’s information."
      ]
    },
    // 34
    {
      type: "single",
      prompt: "Which protocol is used to map network drives within an on-premises Windows environment?",
      options: [
        "Network File System (NFS)",
        "Server Message Block (SMB)",
        "Common Internet File System (CIFS)",
        "File Transfer Protocol (FTP)"
      ],
      answer: 1,
      explanation: [
        "Server Message Block (SMB) is the default protocol for mapping network drives in an on-premises Windows environment.",
        "Network File System (NFS) is primarily used in Unix and Linux for mapping network drives.",
        "File Transfer Protocol (FTP) is primarily used to connect to remote servers.",
        "Common Internet File System (CIFS) is primarily used in non-Windows environments."
      ]
    }
  ]
};
