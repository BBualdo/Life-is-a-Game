FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY API/API.csproj API/
COPY Contracts/Contracts.csproj Contracts/
COPY Data/Data.csproj Data/
COPY Repository/Repository.csproj Repository/
COPY Services/Services.csproj Services/
RUN dotnet restore API/API.csproj

COPY API/ API/
COPY Contracts/ Contracts/
COPY Data/ Data/
COPY Repository/ Repository/
COPY Services/ Services/
RUN dotnet publish API/API.csproj -c Release -o /app --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
RUN apt-get update \
 && apt-get install -y --no-install-recommends curl \
 && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY --from=build /app .
ENV ASPNETCORE_HTTP_PORTS=8080
EXPOSE 8080
ENTRYPOINT ["dotnet", "API.dll"]
