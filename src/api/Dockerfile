FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY src/api/API.csproj src/api/
COPY src/contracts/Contracts.csproj src/contracts/
COPY src/data/Data.csproj src/data/
COPY src/repository/Repository.csproj src/repository/
COPY src/services/Services.csproj src/services/
RUN dotnet restore src/api/API.csproj

COPY src/api/ src/api/
COPY src/contracts/ src/contracts/
COPY src/data/ src/data/
COPY src/repository/ src/repository/
COPY src/services/ src/services/
RUN dotnet publish src/api/API.csproj -c Release -o /app --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
RUN apt-get update \
 && apt-get install -y --no-install-recommends curl \
 && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY --from=build /app .
ENV ASPNETCORE_HTTP_PORTS=8080
EXPOSE 8080
ENTRYPOINT ["dotnet", "API.dll"]
