import * as React from "react";
import ListRow from "./ListRow";
import { useNavigate } from "react-router-dom";
import { UserDataApi } from "../../../api/releaseInfo";
import { GetAllAdminTicketApi } from "../../../api/ticket";
import { BounceLoader } from "react-spinners";
import { GetAllUsersDataApi } from "../../../api/user";
import { stubTickets } from "../../../data/stubTickets";
import ChatLayout from "./ChatLayout";

export default function UserTicketsIndex() {
  const [userData, setUserData] = React.useState<any>("");
  const navigate = useNavigate();
  const [userId, setUserId] = React.useState("");
  const [statusId, setStatusId] = React.useState("");
  type TicketType = {
    ticket_id: number;
    users_id: number;
    reason: string;
    discreption: string;
    ticketDocument: string;
    Status: number;
    created_at: string;
    users: { fname: string; lname: string; email: string; }[];
  };
  const [tickets, settickets] = React.useState<TicketType[]>([]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedTicket, setSelectedTicket] = React.useState<any>(null);
  const [aiResponse, setAiResponse] = React.useState("");
  const [responseCharCount, setResponseCharCount] = React.useState(0);
  const [messages, setMessages] = React.useState<
    Array<{ text: string; sender: "user" | "support" }>
  >([
    {
      text: "Title name - Nannaadharichu Replace with - VUNNATHAMAINA RAAJYAPUYAASI Spotify\nlink: https://open.spotify.com/track/3wVBApea3LNSEiOfRtuEfM\nkindly change the name of this song.",
      sender: "user",
    },
    {
      text: "Your Ticket has been processed by our Team.\n\nSupport Team\nFM Digital Official (ASIA)",
      sender: "support",
    },
  ]);
  const [isTyping, setIsTyping] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const token = localStorage.getItem("token");
  const { data: allUsersData } = GetAllUsersDataApi();
  const { mutate: getUserData, isLoading: isLoadinggetUserData } = UserDataApi(
    setUserData,
    navigate
  );
  const {
    data: GetAllTicket,
    isLoading: isLoadingGetAllTicket,
    isFetching,
  } = GetAllAdminTicketApi(userId, statusId);

  React.useEffect(() => {
    getUserData({ token: token });
  }, []);

  React.useEffect(() => {
    if (GetAllTicket) {
      const ticketsData =
        GetAllTicket.data.data && GetAllTicket.data.data.length > 0
          ? GetAllTicket.data.data
          : stubTickets;
      settickets(ticketsData);
    } else {
      settickets(stubTickets);
    }
  }, [GetAllTicket]);

  // Auto-scroll to bottom when new messages arrive
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleFilter = (event: any) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchTerm(inputValue);
  };

  const filterRecords = (data: any, term: any) => {
    return data.filter((row: any) => row?.reason.toLowerCase().includes(term));
  };

  const getFilteredData = () => {
    const filteredRecords = filterRecords(tickets, searchTerm);
    return {
      records: filteredRecords,
      totalFilteredRecords: filteredRecords.length,
    };
  };

  const { records, totalFilteredRecords } = getFilteredData();

  const formatDateTime = (value: string) => {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedTime = `${hours}:${minutes} ${ampm}`;

    return { date: formattedDate, time: formattedTime };
  };

  // Stub AI responses
  const stubAIResponses = [
    "Thank you for your query. We have received your request and our team will process it within 24-48 hours.",
    "Your request has been forwarded to the technical team. You will receive an update shortly.",
    "We appreciate your patience. The changes you requested are being reviewed by our quality assurance team.",
    "Your ticket has been escalated to our senior support team for faster resolution.",
    "Thank you for providing the details. We will update the information as requested and notify you once completed.",
    "We understand your concern. Our team is working on resolving this issue on priority.",
  ];

  const handleSendResponse = () => {
    if (aiResponse.trim() === "") return;

    // Add user message
    const userMessage = {
      text: aiResponse,
      sender: "user" as const,
    };
    setMessages((prev) => [...prev, userMessage]);
    setAiResponse("");
    setResponseCharCount(0);

    // Show typing indicator
    setIsTyping(true);

    // Simulate AI response after 1.5 seconds
    setTimeout(() => {
      const randomResponse =
        stubAIResponses[Math.floor(Math.random() * stubAIResponses.length)];
      const supportMessage = {
        text: randomResponse,
        sender: "support" as const,
      };
      setMessages((prev) => [...prev, supportMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendResponse();
    }
  };

  return (
    <>
      {(isLoadingGetAllTicket || isFetching) && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-100">
          <BounceLoader size={150} color={"#000000"} />
        </div>
      )}
      <div className="p-4">
        {/* <div className="w-[150px] -mb-8 p-2">
          <select
            className="px-4 py-2 w-full sm:w-auto rounded-md border border-gray-300  "
            onChange={(e) => setStatusId(e.target.value)}
            value={statusId}
          >
            <option value="">All</option>
            <option value={4}>Approved</option>
            <option value={0}>Pending</option>
            <option value={2}>Rejected</option>
          </select>
        </div> */}

        <div className="flex flex-col sm:flex-row justify-between items-center p-1  w-full ">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-[150px]  p-2">
              <select
                className="px-4 py-2 w-full sm:w-auto rounded-md border border-gray-300  "
                onChange={(e) => setStatusId(e.target.value)}
                value={statusId}
              >
                <option value="">All</option>
                <option value={4}>Approved</option>
                <option value={0}>Pending</option>
                <option value={2}>Rejected</option>
              </select>
            </div>
          </div>

          <div className="mt-4 sm:mt-0">
            <div className="max-w-md mx-auto">
              <button className="flex items-center gap-2 px-4 py-1 text-green-600 font-medium text-base border-2 border-green-500 rounded hover:bg-green-50 transition-colors whitespace-nowrap">
                <span className="text-xl font-bold">+</span>
                New Ticket
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col sm:flex-row justify-between items-center p-1  w-full mb-2">
            <div className="flex flex-col sm:flex-row items-center gap-4"></div>
            <div className="mt-4 sm:mt-0">
              <p className="text-right text-lg font-semibold text-black">
                Total Tickets :{totalFilteredRecords || 0}
              </p>
            </div>
          </div>

          {/* Empty container purple coloe box div on top */}
          <div className="flex flex-col sm:flex-row justify-center items-center p-4 bg-[#9791FF] rounded-md shadow-md w-full mb-2 text-center">
            Due to high traffic of tickets, the response may vary from 24 hours
            to 1 week.
          </div>

          <div className="flex flex-col">
            <div className="-my-2 sm:-mx-2 lg:-mx-2">
              <div className="py-2 align-middle inline-block min-w-full sm:px-2 lg:px-2">
                <div
                  className="shadow border border-gray-200 sm:rounded-lg overflow-y-auto"
                  style={{ maxHeight: "310px" }}
                >
                  <table className="min-w-full divide-y divide-gray-200 ">
                    <thead className="bg-gray-50 sticky top-0 z-10">
                      <tr>
                        <th
                          scope="col"
                          className="w-10 px-2 py-3 text-left text-xs text-black font-semibold uppercase"
                        >
                          No.
                        </th>
                       
                        <th
                          scope="col"
                          className="w-24 px-2 py-3 text-left text-xs text-black font-semibold "
                        >
                          Reason
                        </th>
                        <th
                          scope="col"
                          className="w-24 px-2 py-3 text-left text-xs text-black font-semibold "
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          className="w-12 px-2 py-3 text-left text-xs text-black font-semibold "
                        >
                          Ticket Id
                        </th>
                        <th
                          scope="col"
                          className="w-4  py-3 text-left text-xs text-black font-semibold "
                        >
                          Response by Team
                        </th>

                         <th
                          scope="col"
                          className="w-12 px-2 py-3 text-left text-xs text-black font-semibold"
                        >
                          Created at
                        </th>

                        <th
                          scope="col"
                          className="w-6 py-3 text-left text-xs text-black font-semibold "
                        >
                          Status
                        </th>
                        
                       
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 mt-2">
                      {records?.length === 0 ? (
                        <tr className="w-full">
                          <td className="text-center py-4" colSpan={11}>
                            No tickets found.
                          </td>
                        </tr>
                      ) : (
                        records?.map((data: any, index: any) => {
                          return (
                            <React.Fragment key={index}>
                              <ListRow
                                data={data}
                                index={index}
                                onRowClick={() => setSelectedTicket(data)}
                                isSelected={
                                  selectedTicket?.ticket_id === data.ticket_id
                                }
                              />
                            </React.Fragment>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* Horizontal Line */}
          <hr className="border-gray-200 mt-4" />
        </div>

        <div className="p-2">
          
          {/* AI Response Box */}
          <ChatLayout />

          
        </div>
      </div>
    </>
  );
}
