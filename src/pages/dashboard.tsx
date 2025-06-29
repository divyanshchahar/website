// import Button from "@/ui/components/Button";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/router";
// import { Tabs } from "radix-ui";
// import { SubmitHandler, useForm } from "react-hook-form";
// import styles from "./dashboard.module.css";
// import type { UsersSchemaType } from "@/models/Users";
// import { useEffect, useState } from "react";
// import apiEndPoints from "@/consts/apiEndpoints";

// export type UserInputType = {
//   name: string;
//   email: string;
// };

// export type retrivedUserType = {
//   status: "loading" | "present" | "absent" | "failed";
//   data: UsersSchemaType | undefined;
// };

// const Dashboard = () => {
//   const { data: session, status } = useSession();

//   const router = useRouter();

//   const [retrivedUser, setRetrivedUser] = useState<retrivedUserType>({
//     status: "loading",
//     data: undefined,
//   });

//   useEffect(() => {
//     const fetchUser = async () => {
//       console.log(apiEndPoints.users);

//       try {
//         const res = await fetch(apiEndPoints.users, {
//           method: "GET",
//           headers: { "Content-Type": "application/json" },
//         });

//         if (res.status !== 200) {
//           setRetrivedUser({ ...retrivedUser, status: "absent" });
//           return;
//         }

//         const json = await res.json();

//         setRetrivedUser({ status: "present", data: { ...json } });
//       } catch (error) {
//         setRetrivedUser({ ...retrivedUser, status: "failed" });
//         console.log(error);
//       }
//     };

//     fetchUser();
//   }, []);

//   const onSubmit: SubmitHandler<UserInputType> = async (formData) => {
//     try {
//       await fetch("/api/users", {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         method: "POST",
//         body: JSON.stringify(formData),
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<UserInputType>();

//   if (status === "loading")
//     return (
//       <div className={styles.fullScreen}>
//         <div className={styles.loader}></div>
//       </div>
//     );

//   if (status === "unauthenticated") {
//     router.push("/api/auth/signin");
//   }

//   if (status === "authenticated")
//     return (
//       <Tabs.Root className={styles.Root} defaultValue="tab1">
//         <Tabs.List className={styles.List} aria-label="Manage your account">
//           <Tabs.Trigger className={styles.Trigger} value="tab1">
//             Account
//           </Tabs.Trigger>

//           <Tabs.Trigger className={styles.Trigger} value="tab2">
//             Dashboard
//           </Tabs.Trigger>
//         </Tabs.List>

//         <Tabs.Content className={styles.Content} value="tab1">
//           <h4>Account Details</h4>

//           <br />

//           <form onSubmit={handleSubmit(onSubmit)}>
//             <label>
//               Full Name <sup>*</sup>
//             </label>
//             <br />
//             <input
//               type="text"
//               placeholder="John Doe"
//               className={styles.Input}
//               {...register("name", { required: "name is required" })}
//             />
//             {errors.name?.message && (
//               <p className={styles.warning}>This filed is required</p>
//             )}

//             <br />
//             <label>email</label>
//             <br />
//             <input
//               type="text"
//               placeholder="johndoe@email.com"
//               className={styles.Input}
//               value={session?.user?.email || ""}
//               {...register("email", { required: "email is required" })}
//             />

//             <br />
//             <div className={styles.button}>
//               <Button
//                 buttonText={
//                   retrivedUser.status === "absent" ? "Save" : "Update"
//                 }
//               />
//             </div>

//             <br />
//           </form>

//           <hr />

//           <br />

//           <div className={styles.button}>
//             {!retrivedUser.data?.pan ? (
//               <Button buttonText="Add Pan Card Details" />
//             ) : (
//               "Hello"
//             )}
//           </div>
//         </Tabs.Content>

//         <Tabs.Content className={styles.Content} value="tab2">
//           <h5>Dashboard</h5>
//         </Tabs.Content>
//       </Tabs.Root>
//     );

//   {
//   }
// };

// export default Dashboard;
