# **Issue Creation Guidelines**

## **Introduction**
This document outlines the process for creating clear and actionable issues for our project. By following these guidelines, our team can efficiently track bugs, enhancements, and new features, ensuring smooth collaboration and progress.

## **1. Title**
- Keep it concise and specific.
- Use a consistent format: `[Feature]`, `[Bug]`, `[Refactor]`, `[Enhancement]`.
- Example: `[Bug] Fix bid placement error on auction page`.

## **2. Description**
- Clearly explain the issue or feature request.
- Provide relevant context, including why this matters.
- Link to related issues if applicable.

## **3. Steps to Reproduce (For Bugs)**
- List the steps required to replicate the issue.
- Include expected vs. actual behavior.
- Attach screenshots, logs, or error messages if available.

## **4. Expected Outcome**
- Define what should happen when the issue is resolved.
- Example:
  - Users should be able to successfully place bids.
  - The UI should update without errors.

## **5. Technical Details (If Applicable)**
- Outline potential solutions or areas of investigation.
- Specify affected components (e.g., frontend, backend, database).

## **6. Priority & Labels**
- Assign a priority: `Low`, `Medium`, `High`, `Critical`.
- Use relevant labels (`UI`, `Backend`, `Database`, etc.) to categorize the issue.

## **7. Assignee & Milestone**
- Assign the issue to a team member if known.
- Link it to a milestone or sprint to track progress.

## **8. Additional Notes**
- Reference documentation or related tasks.
- Mention dependencies that might affect completion.
- Add any extra information that aids in resolution.

---

## **Example Issue**

### **Title:** `[Bug] Fix bid placement error on auction page`

### **Description:**
Users are unable to place bids on auction listings. Clicking the "Place Bid" button does not trigger any response. This issue affects the core auction functionality, preventing users from engaging in bidding.

### **Steps to Reproduce:**
1. Log in to the application.
2. Navigate to an active auction listing.
3. Enter a bid amount and click "Place Bid".
4. Observe that no confirmation message appears and the bid is not recorded.

### **Expected Outcome:**
- Clicking "Place Bid" should submit the bid successfully.
- A confirmation message should be displayed.
- The bid amount should update in real-time.

### **Technical Details:**
- Potential issue with the frontend API call to the backend.
- Check event listener on the "Place Bid" button.
- Verify database updates upon bid submission.

### **Priority & Labels:**
- Priority: `High`
- Labels: `Frontend`, `Backend`, `Auction`

### **Assignee & Milestone:**
- Assignee: `Gavriel Warren`
- Milestone: `Sprint 5`

### **Additional Notes:**
- Related issue: `[Bug] API request failure on bid submission`.
- Logs indicate a 400 error from the backend when submitting a bid.

