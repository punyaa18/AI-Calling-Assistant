<img width="1363" height="647" alt="Make com screenshot" src="https://github.com/user-attachments/assets/fbab723d-044c-44c5-a275-ee75a6a4d8b7" />

 ## Workflow Steps

This workflow powers an AI calling assistant end-to-end.

### Step 1: Webhook Trigger
**The webhook** acts as the entry point.
When a user submits their phone number from the web form, the webhook is triggered.

### Step 2: Contact Storage  
The phone number and user data are stored in **Supabase**, which acts as the database.

### Step 3: Data Processing
From **Supabase**, we fetch and normalize phone numbers. The **Array Aggregator** processes contacts individually.
Make sure your Supabase has the limits as you require. In our case, we used these <img width="843" height="632" alt="image" src="https://github.com/user-attachments/assets/d5ae8a8c-be61-413d-8f7b-eaf9b843fda6" />

**This is for the array aggregator**  


<img width="594" height="642" alt="image" src="https://github.com/user-attachments/assets/d06e6fcc-e523-4777-9b46-71f16caf8162" />

The **Tools module** contains the assistant’s behavior and speaking logic — what the assistant should say, how it should respond, and the overall context of the call.
The AI assistant is configured to speak both Hindi and English.
make sure to input your assistant ID 
<img width="708" height="645" alt="image" src="https://github.com/user-attachments/assets/92b6f027-3fd3-480e-878d-c4b81f3303e6" />



<img width="638" height="650" alt="image" src="https://github.com/user-attachments/assets/4d42bc13-36e3-40e8-9be7-86f44f6c981e" />




<img width="686" height="636" alt="image" src="https://github.com/user-attachments/assets/d539e787-d185-4e01-a036-63845f4ce5c6" /> 




This information is then parsed and structured using **JSON** so it can be correctly understood by the calling system.
***HTTP module***
-triggers Vapi AI, which actually places the outbound AI call to the user.
For HTTP make sure you have an auth header where you mention your private vapi key. and the request content had this 
{
  "customer": {
    "number": "{{4.value}}",
    "name": "{{3.array[].name}}",
    "extension": ""
  },
  "phoneNumberId": "<mention your own , available on vapi",
  "assistant":{{8.json}} 
}
<img width="694" height="486" alt="image" src="https://github.com/user-attachments/assets/f96afc81-304f-4b70-8513-dbb897bcab74" />

Once the call is completed:

A confirmation email is sent to verify whether the user’s query has been fulfilled.

A **message** (SMS/WhatsApp) is sent to confirm completion.

If required, a **Google Calendar** event or meeting is automatically created based on the call outcome.
