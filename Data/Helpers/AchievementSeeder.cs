using Data.Models;

namespace Data.Helpers;

public class AchievementSeeder
{
  public static List<Achievement> GetAchievements()
  {
    var achievements = new List<Achievement>
    {
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Neon Novice",
        Requirements = "Complete 'How To Play'.",
        XpReward = 10,
        ImageUrl = "https://ibb.co/zmnKFD4"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Mission Maverick",
        Requirements = "Add your first mission.",
        XpReward = 10,
        ImageUrl = "https://ibb.co/5nLkGL3"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Codebreaker Initiate",
        Requirements = "Complete your first mission.",
        XpReward = 25,
        ImageUrl = "https://ibb.co/vHRxKWn"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Profile Overdrive",
        Requirements = "Complete every field in profile dashboard.",
        XpReward = 10,
        ImageUrl = "https://ibb.co/z8NJnzy"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Daily Data Dynamo",
        Requirements = "Complete mission on 'Daily' difficulty.",
        XpReward = 25,
        ImageUrl = "https://ibb.co/XzjWXMw"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Sweat-Proof Runner",
        Requirements = "Complete mission on 'Drop of Sweat' difficulty.",
        XpReward = 50,
        ImageUrl = "https://ibb.co/2hj4PXS"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Chaos Conqueror",
        Requirements = "Complete mission on 'Challenging' difficulty.",
        XpReward = 75,
        ImageUrl = "https://ibb.co/4NXkrCj"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Life-Hacker Elite",
        Requirements = "Complete mission on 'Life-Hacker' difficulty.",
        XpReward = 100,
        ImageUrl = "https://ibb.co/0qDhmWQ"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Procrastination Purged",
        Requirements = "Complete mission on 'Anti-Procrastinator' difficulty.",
        XpReward = 250,
        ImageUrl = "https://ibb.co/KmHMCW4"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Difficulty Dominator",
        Requirements = "Complete mission on every difficulty level.",
        XpReward = 200,
        ImageUrl = "https://ibb.co/Yj4tPhs"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Strategic Surrender",
        Requirements = "Give up a mission with at least one subtask completed.",
        XpReward = 25,
        ImageUrl = "https://ibb.co/F07jvbr"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Mission Maestro",
        Requirements = "Complete 5 missions.",
        XpReward = 50,
        ImageUrl = "https://ibb.co/LCyGq50"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Deca-Task Dynamo",
        Requirements = "Complete 10 missions.",
        XpReward = 100,
        ImageUrl = "https://ibb.co/jw0FHYB"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Quarter Century Quasar",
        Requirements = "Complete 25 missions.",
        XpReward = 250,
        ImageUrl = "https://ibb.co/9ZpHpn2"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Half Century Hero",
        Requirements = "Complete 50 missions.",
        XpReward = 500,
        ImageUrl = "https://ibb.co/S0q7ffZ"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Level 5 Luminary",
        Requirements = "Reach level 5.",
        XpReward = 50,
        ImageUrl = "https://ibb.co/dPFMmmC"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Deca-Level Dynamo",
        Requirements = "Reach level 10.",
        XpReward = 100,
        ImageUrl = "https://ibb.co/0BMKrsB"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Quarter Century Cipher",
        Requirements = "Reach level 25.",
        XpReward = 250,
        ImageUrl = "https://ibb.co/9v8QNFR"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Half Century Hacker",
        Requirements = "Reach level 50.",
        XpReward = 500,
        ImageUrl = "https://ibb.co/MfYTBR0"
      },
      new()
      {
        Id = Guid.NewGuid(),
        Title = "Achievement Unleashed",
        Requirements = "Unlock every achievement.",
        XpReward = 2500,
        ImageUrl = "https://ibb.co/5YL1vqR"
      }
    };
    return achievements;
  }
}