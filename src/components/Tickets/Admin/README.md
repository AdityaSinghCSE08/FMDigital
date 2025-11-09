# Admin Tickets Section

## Overview
This section displays all tickets submitted by users with admin controls to approve or reject them.

## Features
- **Stub Data Integration**: When no real data is available from the API, the system automatically displays stub/demo data
- **Search Functionality**: Search tickets by reason
- **Filter by Status**: Filter tickets by Approved, Pending, or Rejected status
- **Filter by User**: Filter tickets by specific user ID
- **Pagination**: Displays 25 tickets per page with navigation controls
- **Action Buttons**: Approve or Reject tickets directly from the list

## Stub Data
The stub data is located in `src/data/stubTickets.ts` and includes sample tickets that mimic real data structure:
- Ticket ID
- User information
- Reason and description
- Attachment document
- Status (Pending, Done, Rejected)
- Created date

## Data Flow
1. Component tries to fetch real data from API
2. If API returns empty data or fails, stub data is automatically used
3. Stub data ensures the UI always has content to display for testing/demo purposes

## Table Columns
- **No.**: Sequential number
- **User Id**: ID of the user who created the ticket
- **User Name**: Full name of the user
- **Email**: User's email address
- **Reason**: Reason for the ticket
- **Description**: Detailed description
- **Ticket Id**: Unique ticket identifier
- **Attachment**: Downloadable document link
- **Status**: Current status badge (Pending/Done/Reject)
- **Action**: Approve/Reject buttons
- **Created at**: Timestamp of ticket creation

## Status Types
- **Pending** (Status: 0): Yellow badge
- **Rejected** (Status: 2): Red badge
- **Done/Approved** (Status: 4): Green badge
