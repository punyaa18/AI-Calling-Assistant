<img width="1363" height="647" alt="Make com screenshot" src="https://github.com/user-attachments/assets/fbab723d-044c-44c5-a275-ee75a6a4d8b7" />

 ## Workflow Explanation

This workflow powers an AI calling assistant end-to-end.

**The webhook** acts as the trigger.
When a user submits their phone number (for example, from a website or form), the webhook is triggered.

Once triggered, the phone number and user data are stored in Supabase, which acts as the database.

From **Supabase**, we fetch the phone numbers, clean and normalize the data, and then iterate through it, so no matter how many numbers are present, each person can be called individually.

The **Tools module** contains the assistant’s behavior and speaking logic — what the assistant should say, how it should respond, and the overall context of the call.
The AI assistant is configured to speak both Hindi and English.

This information is then parsed and structured using **JSON** so it can be correctly understood by the calling system.
***HTTP module***
-triggers Vapi AI, which actually places the outbound AI call to the user.

Once the call is completed:

A confirmation email is sent to verify whether the user’s query has been fulfilled.

A **message** (SMS/WhatsApp) is sent to confirm completion.

If required, a **Google Calendar** event or meeting is automatically created based on the call outcome.
