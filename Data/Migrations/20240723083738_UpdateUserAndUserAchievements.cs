using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Data.Migrations
{
    /// <inheritdoc />
    public partial class UpdateUserAndUserAchievements : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("186a8ee6-ba6b-4667-9465-a40d7c9d1a7e"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("1aa30ffa-3267-4c66-817f-a8a162803f94"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("330b242a-abe1-49ab-af2b-681b791a1bb8"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("3b17665c-d11e-4515-871a-7d5462f6e2d7"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("56fe8c2b-912e-415c-8733-942824c1c1e0"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("57e3151c-974c-4a82-bb4d-4a6fad2ec229"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("69db42a9-e83d-4722-94ff-dd77477bb088"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("6d772e41-de1e-4eca-a5f5-08ce50f9f67c"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("80df3ace-5a60-4935-aaca-167fc3a263eb"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("83841a4e-4527-47cb-a5f8-db78bef76ec1"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("83953144-8887-441a-95b0-51b93b2627c6"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("a492f799-c04f-4580-a5f3-b9a1f6dfbf80"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("ce58961b-99f6-4420-9dfc-681ae2f38f70"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("cf216b19-9f26-446d-aab0-cf1a8f511cb1"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("d6cabe6d-2ff0-4d2c-ae79-4d56448fe01c"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("d9c051dc-8090-4245-9f0b-6ff174f8c43a"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("db8c7142-a1de-4e95-8055-614dd1a081b1"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("ec9b66a9-2730-4b35-a09d-2bb70675129b"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("eda2a134-4451-4487-a307-260dbb9ca0ad"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("f5daf402-f6dc-4d01-a8fc-0165e6fe3e34"));

            migrationBuilder.DropColumn(
                name: "IsUnlocked",
                table: "UserAchievements");

            migrationBuilder.AddColumn<string>(
                name: "FacebookId",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "GithubId",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "GoogleId",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.InsertData(
                table: "Achievements",
                columns: new[] { "Id", "ImageUrl", "Requirements", "Title", "XpReward" },
                values: new object[,]
                {
                    { new Guid("03deb41d-50d7-4f0f-941d-c02a4f64ae03"), "https://ibb.co/2hj4PXS", "Complete mission on 'Drop of Sweat' difficulty.", "Sweat-Proof Runner", 50 },
                    { new Guid("11e3cd46-f722-4925-a749-7534a4f2b906"), "https://ibb.co/4NXkrCj", "Complete mission on 'Challenging' difficulty.", "Chaos Conqueror", 75 },
                    { new Guid("171a541d-38a3-4416-a69e-4a17baa8adc3"), "https://ibb.co/5nLkGL3", "Add your first mission.", "Mission Maverick", 10 },
                    { new Guid("1fba5715-69db-4cec-991e-96d735099a10"), "https://ibb.co/XzjWXMw", "Complete mission on 'Daily' difficulty.", "Daily Data Dynamo", 25 },
                    { new Guid("246fd828-e4f7-4a64-9fd0-ce9eb4268e62"), "https://ibb.co/0BMKrsB", "Reach level 10.", "Deca-Level Dynamo", 100 },
                    { new Guid("283b9c13-6949-4faa-92ee-ab0f34687bb7"), "https://ibb.co/MfYTBR0", "Reach level 50.", "Half Century Hacker", 500 },
                    { new Guid("28babd3d-65bc-4fa5-891b-bf97c6391d09"), "https://ibb.co/z8NJnzy", "Complete every field in profile dashboard.", "Profile Overdrive", 10 },
                    { new Guid("36a32379-7062-4c7d-943e-44d2c7e57ebe"), "https://ibb.co/5YL1vqR", "Unlock every achievement.", "Achievement Unleashed", 2500 },
                    { new Guid("38df1376-cca4-4ca7-96ca-593849df3fcc"), "https://ibb.co/jw0FHYB", "Complete 10 missions.", "Deca-Task Dynamo", 100 },
                    { new Guid("3bbb87e1-6df8-4a5d-a26e-c4717f13572b"), "https://ibb.co/F07jvbr", "Give up a mission with at least one subtask completed.", "Strategic Surrender", 25 },
                    { new Guid("3f78ee6b-53c0-477a-ad02-cce0ef63dce6"), "https://ibb.co/vHRxKWn", "Complete your first mission.", "Codebreaker Initiate", 25 },
                    { new Guid("576a47b5-ba39-4726-9882-c0f40a0b75cb"), "https://ibb.co/KmHMCW4", "Complete mission on 'Anti-Procrastinator' difficulty.", "Procrastination Purged", 250 },
                    { new Guid("623fd6b7-3759-4281-91b8-be0c9bacdf78"), "https://ibb.co/9v8QNFR", "Reach level 25.", "Quarter Century Cipher", 250 },
                    { new Guid("a15cde08-b1b2-4594-b7e2-aae1148c2ec7"), "https://ibb.co/LCyGq50", "Complete 5 missions.", "Mission Maestro", 50 },
                    { new Guid("b1b99495-4dd0-414f-9071-70bf5d35bbad"), "https://ibb.co/Yj4tPhs", "Complete mission on every difficulty level.", "Difficulty Dominator", 200 },
                    { new Guid("b4c06454-b242-4462-afb1-46e7434007ce"), "https://ibb.co/zmnKFD4", "Complete 'How To Play'.", "Neon Novice", 10 },
                    { new Guid("ba0bf1aa-d50b-49e2-857c-ec5993a27d07"), "https://ibb.co/dPFMmmC", "Reach level 5.", "Level 5 Luminary", 50 },
                    { new Guid("d4f66a08-6642-4304-a679-fb7f77aadbe0"), "https://ibb.co/S0q7ffZ", "Complete 50 missions.", "Half Century Hero", 500 },
                    { new Guid("f1bbad9d-d4db-4838-bf78-e483f3a7b8c8"), "https://ibb.co/0qDhmWQ", "Complete mission on 'Life-Hacker' difficulty.", "Life-Hacker Elite", 100 },
                    { new Guid("fbf0d5f7-a903-45f8-aea8-4b9acd1e68a3"), "https://ibb.co/9ZpHpn2", "Complete 25 missions.", "Quarter Century Quasar", 250 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("03deb41d-50d7-4f0f-941d-c02a4f64ae03"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("11e3cd46-f722-4925-a749-7534a4f2b906"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("171a541d-38a3-4416-a69e-4a17baa8adc3"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("1fba5715-69db-4cec-991e-96d735099a10"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("246fd828-e4f7-4a64-9fd0-ce9eb4268e62"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("283b9c13-6949-4faa-92ee-ab0f34687bb7"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("28babd3d-65bc-4fa5-891b-bf97c6391d09"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("36a32379-7062-4c7d-943e-44d2c7e57ebe"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("38df1376-cca4-4ca7-96ca-593849df3fcc"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("3bbb87e1-6df8-4a5d-a26e-c4717f13572b"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("3f78ee6b-53c0-477a-ad02-cce0ef63dce6"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("576a47b5-ba39-4726-9882-c0f40a0b75cb"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("623fd6b7-3759-4281-91b8-be0c9bacdf78"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("a15cde08-b1b2-4594-b7e2-aae1148c2ec7"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("b1b99495-4dd0-414f-9071-70bf5d35bbad"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("b4c06454-b242-4462-afb1-46e7434007ce"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("ba0bf1aa-d50b-49e2-857c-ec5993a27d07"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("d4f66a08-6642-4304-a679-fb7f77aadbe0"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("f1bbad9d-d4db-4838-bf78-e483f3a7b8c8"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("fbf0d5f7-a903-45f8-aea8-4b9acd1e68a3"));

            migrationBuilder.DropColumn(
                name: "FacebookId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "GithubId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "GoogleId",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<bool>(
                name: "IsUnlocked",
                table: "UserAchievements",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.InsertData(
                table: "Achievements",
                columns: new[] { "Id", "ImageUrl", "Requirements", "Title", "XpReward" },
                values: new object[,]
                {
                    { new Guid("186a8ee6-ba6b-4667-9465-a40d7c9d1a7e"), "https://ibb.co/LCyGq50", "Complete 5 missions.", "Mission Maestro", 50 },
                    { new Guid("1aa30ffa-3267-4c66-817f-a8a162803f94"), "https://ibb.co/F07jvbr", "Give up a mission with at least one subtask completed.", "Strategic Surrender", 25 },
                    { new Guid("330b242a-abe1-49ab-af2b-681b791a1bb8"), "https://ibb.co/2hj4PXS", "Complete mission on 'Drop of Sweat' difficulty.", "Sweat-Proof Runner", 50 },
                    { new Guid("3b17665c-d11e-4515-871a-7d5462f6e2d7"), "https://ibb.co/0qDhmWQ", "Complete mission on 'Life-Hacker' difficulty.", "Life-Hacker Elite", 100 },
                    { new Guid("56fe8c2b-912e-415c-8733-942824c1c1e0"), "https://ibb.co/Yj4tPhs", "Complete mission on every difficulty level.", "Difficulty Dominator", 200 },
                    { new Guid("57e3151c-974c-4a82-bb4d-4a6fad2ec229"), "https://ibb.co/z8NJnzy", "Complete every field in profile dashboard.", "Profile Overdrive", 10 },
                    { new Guid("69db42a9-e83d-4722-94ff-dd77477bb088"), "https://ibb.co/4NXkrCj", "Complete mission on 'Challenging' difficulty.", "Chaos Conqueror", 75 },
                    { new Guid("6d772e41-de1e-4eca-a5f5-08ce50f9f67c"), "https://ibb.co/jw0FHYB", "Complete 10 missions.", "Deca-Task Dynamo", 100 },
                    { new Guid("80df3ace-5a60-4935-aaca-167fc3a263eb"), "https://ibb.co/zmnKFD4", "Complete 'How To Play'.", "Neon Novice", 10 },
                    { new Guid("83841a4e-4527-47cb-a5f8-db78bef76ec1"), "https://ibb.co/KmHMCW4", "Complete mission on 'Anti-Procrastinator' difficulty.", "Procrastination Purged", 250 },
                    { new Guid("83953144-8887-441a-95b0-51b93b2627c6"), "https://ibb.co/vHRxKWn", "Complete your first mission.", "Codebreaker Initiate", 25 },
                    { new Guid("a492f799-c04f-4580-a5f3-b9a1f6dfbf80"), "https://ibb.co/5YL1vqR", "Unlock every achievement.", "Achievement Unleashed", 2500 },
                    { new Guid("ce58961b-99f6-4420-9dfc-681ae2f38f70"), "https://ibb.co/9v8QNFR", "Reach level 25.", "Quarter Century Cipher", 250 },
                    { new Guid("cf216b19-9f26-446d-aab0-cf1a8f511cb1"), "https://ibb.co/dPFMmmC", "Reach level 5.", "Level 5 Luminary", 50 },
                    { new Guid("d6cabe6d-2ff0-4d2c-ae79-4d56448fe01c"), "https://ibb.co/XzjWXMw", "Complete mission on 'Daily' difficulty.", "Daily Data Dynamo", 25 },
                    { new Guid("d9c051dc-8090-4245-9f0b-6ff174f8c43a"), "https://ibb.co/S0q7ffZ", "Complete 50 missions.", "Half Century Hero", 500 },
                    { new Guid("db8c7142-a1de-4e95-8055-614dd1a081b1"), "https://ibb.co/MfYTBR0", "Reach level 50.", "Half Century Hacker", 500 },
                    { new Guid("ec9b66a9-2730-4b35-a09d-2bb70675129b"), "https://ibb.co/0BMKrsB", "Reach level 10.", "Deca-Level Dynamo", 100 },
                    { new Guid("eda2a134-4451-4487-a307-260dbb9ca0ad"), "https://ibb.co/5nLkGL3", "Add your first mission.", "Mission Maverick", 10 },
                    { new Guid("f5daf402-f6dc-4d01-a8fc-0165e6fe3e34"), "https://ibb.co/9ZpHpn2", "Complete 25 missions.", "Quarter Century Quasar", 250 }
                });
        }
    }
}
